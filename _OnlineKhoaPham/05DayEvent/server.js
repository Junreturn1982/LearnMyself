const express = require('express');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000, () => console.log('Server started'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// socket.adapter.rooms show danh sach room
const mang = [];

io.on('connection', (socket) => {
    console.log('ket noi: ' + socket.id);
    
    socket.on('hocvien-gui-thongtin', (data) => {
        mang.push(new HocVien(data.hoten, data.email, data.phone));
        io.sockets.emit('server-gui-ds', mang);
    });
});

function HocVien(hoten, email, phone, id) {
    this.hoten = hoten;
    this.email = email;
    this.phone = phone;
    this.id = id;
}

app.get('/', (req, res) => {
    res.render('trangchu');
});


