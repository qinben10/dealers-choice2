const Sequelize = require("sequelize"); //for things like Sequelize.STRING

const db = require('../db');

const Platforms = db.define('platforms',{
    name: Sequelize.STRING,
});

module.exports = Platforms;
