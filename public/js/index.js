var socket = io();

socket.on('connect', function() {
    console.log('Connected To The Server');

    socket.emit('createMessage', {
        from: 'karamjeet@example.com',
        text: 'Hey! This is Karam.'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected From Server');
});

socket.on('newMessage', function(message) {
    console.log('New Message', message);
});