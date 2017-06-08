const setConfig = () => {
    // console.log(process.env);
    process.env.SECRET_KEY = 'mybadasskey';
}

module.exports = {
    setConfig,
    host: 'localhost',
    user: 'root',
    password: 'rootPassw0rd',
    database: 'nha_dat'
};