const socket = io("http://localhost:3000");

$(document).ready(function() {
    socket.on('server-gui-ds', (data) => {
        $('#ds').html('');
        data.map(function(hocvien, index) {
             $('#ds').append(`
                <div class="hocvien">
                    <div class="hang1">id: ${index + 1} || <span>${hocvien.hoten}</span></div>
                    <div class="hang2">${hocvien.email} - ${hocvien.phone}</div>
                </div>
             `);
        });
    });

    $('#btnRegister').click(() => {
        socket.emit('hocvien-gui-thongtin', {
            hoten: $('#txtHoTen').val(),
            email: $('#txtEmail').val(),
            phone: $('#txtPhone').val()
        });
    });

});

