const sequelize = require('../configurations/config');
const Sequelize = require('sequelize');

const gymService = sequelize.define('gymService', {
    ID: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true},
        image: { type: Sequelize.STRING, allowNull: false },
        name: { type: Sequelize.STRING, allowNull: false},
        description: {type: Sequelize.STRING, allowNull: false},
        price: { type: Sequelize.FLOAT, allowNull: false},
        duration: { type: Sequelize.STRING, allowNull: false}
    
}, {freezeTableName: true});

module.exports = gymService;