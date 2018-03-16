package main

import (
    "fmt"
    "io"
    "log"
    "net/http"
    "golang.org/x/net/websocket"
)

var clients []Client
var wsHandler = websocket.Handler(onWsConnect)
var counter int

type Client struct {
    connection *websocket.Conn
    value chan int
    close chan bool
}

func onWsConnect(ws *websocket.Conn) {
    defer ws.Close()
    client := NewClient(ws)
    clients = addClientAndGreet(clients, client)
    client.listen()
}

func broadcast(valueToSend int) {
    fmt.Printf("Broadcasting %+v\n", valueToSend)
    for _, client := range clients {
        client.value <- valueToSend
    }
}

func addClientAndGreet(list []Client, client Client) []Client {
    clients = append(list, client)
    websocket.JSON.Send(client.connection, counter)
    return clients
}

func NewClient(ws *websocket.Conn) Client {
    value := make(chan int, 100)
    close := make(chan bool)

    return Client { ws, value, close }
}

func (client *Client) listen() {
    go client.listenToWrite()
    client.listenToRead()
}

func (client *Client) listenToWrite() {
    for {
        select {
        case valueToSend := <- client.value:
            log.Println("Send:", valueToSend)
            websocket.JSON.Send(client.connection, valueToSend)

        case <- client.close:
            client.close <- true
            return
        }
    }
}

func (client *Client) listenToRead() {
    log.Println("Listening read from client")
    for {
        select {
        case <- client.close:
            client.close <- true
            return

        default:
            var valueToSend int
            err := websocket.JSON.Receive(client.connection, valueToSend)
            fmt.Printf("Received: %+v\n", valueToSend)
            if err == io.EOF {
                client.close <- true
            } else if err != nil {
                // c.server.Err(err)
            } else {
                broadcast(valueToSend)
            }
        }
    }
}

func broadcastHandler(w http.ResponseWriter, r *http.Request) {
    counter++

    broadcast(counter)
    fmt.Fprintf(w, "%v", counter)
}

func main() {
    fs := http.FileServer(http.Dir("public"))

    http.Handle("/", fs)
    http.HandleFunc("/incrementNumber", broadcastHandler)
    http.Handle("/ws", wsHandler)

    http.ListenAndServe(":3000", nil)
    log.Println("Listening...")
}
