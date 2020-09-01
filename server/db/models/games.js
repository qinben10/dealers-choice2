const Sequelize = require("sequelize"); //for things like Sequelize.STRING

const db = require('../db');

const Games = db.define('games',{
    name: Sequelize.STRING,
    genre: Sequelize.STRING,
});

module.exports = Games;
