const Sequelize = require('sequelize');
const dbSequelize = require('../dbSequelize');

const Message = dbSequelize.define('messages', {
    userId: { type: Sequelize.STRING,  allowNull: false},
    name: { type: Sequelize.STRING, allowNull: false },
    message : { type: Sequelize.STRING, allowNull: false }
});

module.exports = Message;