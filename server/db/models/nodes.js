const Sequelize = require('sequelize');
const db = require('../');

const Nodes = db.define('nodes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
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
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Nodes;