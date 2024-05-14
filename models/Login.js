const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Login extends Model { }

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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
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