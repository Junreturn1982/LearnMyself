const express = require('express');
const bodyParser = require('body-parser');

const parser = bodyParser.urlencoded({ extended: false });
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000, () => console.log('Server started'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// socket.adapter.rooms show danh sach room
io.on('connection', (socket) => {
    console.log('ket noi: ' + socket.id);
    console.log('socket: ' + socket.adapter.rooms);

    socket.on('disconnect', () => {
        console.log(socket.id + ' ngat ket noi');
    });

    socket.on('tao-room', (data) => {
        socket.join(data);
    });

});

app.get('/', (req, res) => {
    res.render('trangchuTmp');
});


