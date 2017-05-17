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
// goi server
io.on('connection', (socket) => {
    console.log('ket noi: ' + socket.id);

    socket.on('disconnect', () => {
        console.log(socket.id + ' ngat ket noi');
    });

    socket.on('Client-send-data', (data) => {
        console.log(data);
        // th1: tra ve all user
        // io.sockets.emit('Server-send-data', data + 'Server 888');
        // th2: tra ve user gui
        // socket.emit('Server-send-data', data + 'Server 888');
        // th3: tra ve nguoi khac trong cung socket
        socket.broadcast.emit('Server-send-data', data + 'Server 888');
        // io.to('socketid').emit();
    });


});

app.get('/', (req, res) => {
    res.render('trangchu');
});

// emit: phat, on: nhan


