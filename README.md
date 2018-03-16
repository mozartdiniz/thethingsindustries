# How to start

## First, we need to install Go if you don't have yet.


Go to `https://golang.org/dl/` and download the installer for your OS.

## Then clone the repository

```
git clone git@github.com:mozartdiniz/thethingsindustries.git
```

## The install the server dependencies

```
cd thethingsindustries.git
go get golang.org/x/net/websocket
```

## Now we are ready to go.

Just run this command.

```
go run app.go
```

This should be enough to use the application. 

Go to **http://localhost:3000** with more than one browser to see the magic happening.

# How to rebuild the front-end code.

First we need to install the front-end dependencies. 

```
cd frontend-code
yarn install
```

Can take a while, but when it finish you just need to run:

```
yarn start
```

This code will run the front-end deve server on the http://localhost:3001