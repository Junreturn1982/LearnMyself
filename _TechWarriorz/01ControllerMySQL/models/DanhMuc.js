const queryDB = require('../config/db.js');

class DanhMuc {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    static getAllDanhMuc() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM danhmuc`;
            queryDB(sql, { })
            .then(result => resolve(result))
            .catch(err => reject(err))
        });
    }

    create() {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO danhmuc SET ?`;
            queryDB(sql, { Ten: this.name })
            .then(result => resolve('Insert sucessfully'))
            .catch(err => reject(err))
        });
    }
}

// DanhMuc.getAllDanhMuc()
// .then(result => result)
// .catch(err => err);

// let alldanhmuc = async () => {
//     try {
//         let danhmuc = await DanhMuc.getAllDanhMuc();
//         console.log(danhmuc);
//     } catch (error) {
//        return Promise.reject(error); 
//     }
// } 
// alldanhmuc()
// .then(result => result)

// let danhmuc = new DanhMuc('test');
// danhmuc.create()
// .then(result => console.log(result))
// .catch(err => console.log(err + ' abc'));

module.exports = DanhMuc;