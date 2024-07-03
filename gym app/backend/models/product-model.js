const sequelize = require('../configurations/config');
const Sequelize = require('sequelize');

const Product = sequelize.define('Product', {
    ID: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true},
        image: { type: Sequelize.STRING, allowNull: false },
        name: { type: Sequelize.STRING, allowNull: false},
        description: {type: Sequelize.TEXT('medium'), allowNull: false},
        category: { type: Sequelize.STRING , allowNull: false },
        price: { type: Sequelize.FLOAT, allowNull: false},
        quantity: { type: Sequelize.INTEGER, allowNull: false}
    
}, {freezeTableName: true});

module.exports = Product;