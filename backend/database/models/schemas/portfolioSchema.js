const Sequelize = require('sequelize');

const portfolioSchema = {
    id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.STRING
    },
    profession: {
        type: Sequelize.INTEGER
    },
    about: {
        type: Sequelize.TEXT('long')
    },
    portfolios: {
        type: Sequelize.TEXT('long')
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

module.exports = portfolioSchema;
