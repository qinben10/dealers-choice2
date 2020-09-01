const Sequelize = require("sequelize"); //for things like Sequelize.STRING

const db = require('../db');

const Developers = db.define('developers',{
    name: Sequelize.STRING,
});

module.exports = Developers;
