const Sequelize = require('sequelize');
const db = require('../db');

const Nodes = db.define('nodes', {
    oreType: {
        type: Sequelize.ENUM('Iron', 'Platinum'),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    area: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    waypoint: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Nodes;