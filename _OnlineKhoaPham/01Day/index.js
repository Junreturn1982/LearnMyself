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

io.on('connection', (socket) => {
    console.log('ket noi: ' + socket.id);

    socket.on('disconnect', () => {
        console.log(socket.id + ' ngat ket noi');
    });
});

app.get('/', (req, res) => {
    res.render('trangchu');
});

