import React, { Component } from 'react';

export default function SocketHOC(WrappedComponent) {
  class Socket extends Component {
    constructor(props) {
      super(props);

      this.socket = new WebSocket('ws://localhost:3000/ws');
    }

    render() {
      return <WrappedComponent
        socket={this.socket}
        {...this.props}
      />;
    }
  }

  return Socket;
}
