const socket = io("http://localhost:3000");

$(document).ready(function() {
    socket.on('server-send-rooms', (data) => {
        $('#dsRoom').html('');
        data.map(function(r) {
             $('#dsRoom').append('<h4 class="room">'+r+'</h4>');
        });
    });

    socket.on('server-send-room-socket', (data) => {
        $('#roomCurrent').html(data);
    });

    socket.on('server-chat', (data) => {
        $('#right').append('<div>' +data+ '</div>');
    });

    $('#btnTaoRoom').click(() => {
        socket.emit('tao-room', $('#txtRoom').val());
    });

    $('#btnChat').click(() => {
        socket.emit('user-chat', $('#txtMessage').val());
    });
});

