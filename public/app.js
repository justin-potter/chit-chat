var socket = io();
var input = document.querySelector('#message');
var messages = document.querySelector('#messages');

document.querySelector('form').addEventListener('submit', function(e) {
  console.log('chat message: ', input.value);
  socket.emit('chat message', input.value);
  input.textContent = '';
  event.preventDefault();
});

socket.on('chat message', function(msg) {
  var li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
  console.log('append msg: ', msg);
});