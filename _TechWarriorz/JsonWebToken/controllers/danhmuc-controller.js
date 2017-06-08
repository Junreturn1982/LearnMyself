const DanhMuc = require('../models/DanhMuc.js');

const danhMucController = {
    getAll : function(req, res) {
        DanhMuc.getAllDanhMuc()
        .then(result => res.json({ data: result }))
        .catch(err => res.status(500).send(err.toString()));
    },
    create : function(req, res) {
        const { name } = req.body;
        let danhmuc = new DanhMuc(name);
        danhmuc.create()
        .then(result => res.send(result))
        .catch(err => res.send(err));
    }
}

module.exports = danhMucController;