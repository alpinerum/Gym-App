const gymService = sequelize.define('gymService', {
    ID: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true,
        image: { type: Sequelize.STRING, allowNull: false },
        name: { type: Sequelize.STRING, allowNull: false},
        description: {type: Sequelize.STRING, allowNull: false},
        price: { type: Sequelize.FLOAT, allowNull: false}
    }
}, {freezeTableName: true});

module.exports = gymService;