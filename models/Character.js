const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model { }

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        login_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'login',
        key: 'id',
    }
}
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'character'
    }
);


module.exports = Character;

