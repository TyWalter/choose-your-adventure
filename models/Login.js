const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LogInInfo extends Model { }

Login.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING
        },
    },
        {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: 'login'
    }
);
module.exports = Login;