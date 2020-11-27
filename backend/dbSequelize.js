const Sequelize = require('sequelize');

const dbSequelize = new Sequelize('groupomania', 'root', 'root', {
    host: 'localhost',
    port: ' 8889',
    dialect: 'mysql'
});

dbSequelize.authenticate()
    .then( ()=> console.log('Database connected...'))
    .catch( err => console.log(' erreur :' + err));

module.exports = dbSequelize;