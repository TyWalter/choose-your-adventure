const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stats extends Model { }

Stats.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        played: {
            type: DataTypes.INTEGER
        },
        wins: {
            type: DataTypes.INTEGER
        },
        deaths: {
            type: DataTypes.INTEGER
        },
        losses: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'login',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'stats'
    }
)

module.exports = Stats;