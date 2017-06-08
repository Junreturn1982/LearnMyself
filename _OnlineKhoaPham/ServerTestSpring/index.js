const express = require('express');

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

    socket.on('Client-send-data', (data) => {
        console.log(data);
        io.sockets.emit('Server-send-data', data);
    });
});

app.get('/', (req, res) => {
    res.render('trangchu');
});

// emit: phat, on: nhan


