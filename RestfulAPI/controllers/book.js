var books = {
    getAll : function(req, res){
        var allbooks = data;
        res.json(allbooks);
    },
    getOne : function(req, res){
        var id = req.params.id;
        let book;
        for (var i = 0; i < data.length; i++) {
            console.log(id);
            if(id == data[i].id)
                book = data[i];
        }
        // var book = data[0];
        res.json(book);
    },
    create : function(req, res){
        var name = req.body.name;
        var author = req.body.author;
        var index = Math.floor((Math.random() * 10) + 1);
        let newbook = {
            id : index,
            name : name,
            author : author
        };
        data.push(newbook);
        res.json(data);
    },
    update : function(req, res){
        var name = req.body.name;
        var author = req.body.author;
        var id = req.params.id;
        var updatebook = {
            id : id,
            name : name,
            author : author
        };
        data[id] = updatebook;
        res.json(data);
    },
    delete : function(req, res){
        var id = req.params.id;
        data.splice(id,1);
        res.json(data);
    },
};

module.exports = books;