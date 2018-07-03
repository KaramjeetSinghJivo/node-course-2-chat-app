var socket = io();

socket.on('connect', function() {
    console.log('Connected To The Server');
});

socket.on('disconnect', function() {
    console.log('Disconnected From Server');
});

socket.on('newMessage', function(message) {
    console.log('New Message', message);
});