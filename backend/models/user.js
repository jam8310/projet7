const Sequelize = require('sequelize');
const dbSequelize = require('../dbSequelize');

const User = dbSequelize.define('user', {
    id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, unique: true },
    password : { type: Sequelize.STRING, allowNull: false }
});

module.exports = User;