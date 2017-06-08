const socket = io("http://localhost:3000");

$(document).ready(function() {
    $("#loginForm").show();
    $("#chatForm").hide();

    socket.on('server-send-register-thatbai', function(data) {
        alert('Co nguoi su dung ten nay');
    });

    socket.on('server-send-register-thanhcong', function(data) {
        $('#currentUser').html(data);
        $('#loginForm').hide(2000);
        $('#chatForm').show(1000);
    });

    socket.on('server-send-danhsach-Users', function(data) {
        $('#boxContent').html('');
        data.forEach(function(e){
            $('#boxContent').append('<div class="user">' + e + '</div>');
        });
    });

    socket.on('server-send-message', function(data) {
        $('#listMessages').append('<div class="fs">' + data.un + ':' + data.nd + '</div>');
        
    });

    socket.on('ai-dang-go-chu', function(data) {
        $('#thongbao').html(data);
        
    });
    // alert('');
    $("#btnRegister").click(function() {
        socket.emit('client-send-Username', $('#txtUserName').val());
    });

    $('#btnLogout').click(function() {
        socket.emit('logout');
        $('#loginForm').show(2000);
        $('#chatForm').hide(1000);
    });

    $('#btnSendMessage').click(function() {
        socket.emit('user-send-message', $('#txtMessage').val());
    });
    // bat khi nhap lieu
    $('#txtMessage').focusin(function() {
        socket.emit('toi-dang-go-chu');
    });
    $('#txtMessage').focusout(function() {
        socket.emit('toi-stop-go-chu');
    });
});

