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

let mangUsers = [];
// goi server
io.on('connection', (socket) => {
    console.log('ket noi: ' + socket.id);

    socket.on('disconnect', () => {
        console.log(socket.id + ' ngat ket noi');
    });

    socket.on('client-send-Username', (data) => {
        if (mangUsers.indexOf(data) >= 0) {
            socket.emit('server-send-register-thatbai');
        } else {
            mangUsers.push(data);
            socket.Username = data;
            socket.emit('server-send-register-thanhcong', data);
            io.sockets.emit('server-send-danhsach-Users', mangUsers);
        }

        // th1: tra ve all user
        // io.sockets.emit('Server-send-data', data + 'Server 888');
        // th2: tra ve user gui
        // socket.emit('Server-send-data', data + 'Server 888');
        // th3: tra ve nguoi khac trong cung socket
        socket.broadcast.emit('Server-send-data', data + 'Server 888');
        // io.to('socketid').emit();
    });

    socket.on('logout', () => {
        mangUsers.splice(
            mangUsers.indexOf(socket.Username), 1
        );
        socket.broadcast.emit('server-send-danhsach-Users', mangUsers);
    });

    socket.on('user-send-message', function(data) {
        io.sockets.emit('server-send-message', { un:socket.Username, nd: data });
    });

    socket.on('toi-dang-go-chu', function(data) {
        let goChu = socket.Username + ': dang go chu';
        io.sockets.emit('ai-dang-go-chu', goChu);
    });

    socket.on('toi-stop-go-chu', function(data) {
        let goChu = socket.Username + ': stop go chu';
        io.sockets.emit('ai-stop-go-chu', goChu);
    });
});

app.get('/', (req, res) => {
    res.render('trangchu');
});


