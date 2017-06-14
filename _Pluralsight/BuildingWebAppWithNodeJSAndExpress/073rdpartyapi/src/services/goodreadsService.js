const goodreadsService = function () {
    let getBookById = (id, cb) => {
        cb(null, {description: "Our description"});
    };

    return {
        getBookById
    };

};

module.exports = goodreadsService;