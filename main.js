const express = require('express');
const app= express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname,'chat')))

io.on('connection', (socket) => {
  console.log('a user connected')

    socket.on('sendmsg', (msg) => {
      socket.broadcast.emit("sendtoall", msg)
    });
  });

var port= process.env.PORT || 3000;
http.listen(port)
