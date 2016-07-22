var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var messages;

app.use(express.static('public'));

io.on('connection', function(socket) {
  console.log('Client connected');

  socket.on('new-message', function(data) {
    messages = data;
    console.log(messages);
  });
});

server.listen(8080, function() {
    console.log("Servidor corriendo en http://localhost:8080");
});
