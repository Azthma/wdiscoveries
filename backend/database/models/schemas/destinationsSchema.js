const Sequelize = require('sequelize');

const destinationsSchema = {
    id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    city_id: {
        type: Sequelize.INTEGER
    },
    info: {
        type: Sequelize.TEXT('long')
    },
    image: {
        type: Sequelize.STRING
    },
    created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    deleted_at: {
        type: Sequelize.DATE,
        defaultValue: null
    }
};

module.exports = destinationsSchema;
