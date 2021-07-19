const WebSocket = require('ws')

let socket

function connectSockets(token) {
    socket = new WebSocket("ws://localhost:8080/api/ws/plugins/telemetry?token=" + token);
    socket.onopen = () => {
        console.log('Opened!');
    }
    socket.on('baba', ()=>{
        console.log('Got BABA!');
    })
}

function getSocket() {
    return socket
}


module.exports = {
    connectSockets,
    getSocket
}



