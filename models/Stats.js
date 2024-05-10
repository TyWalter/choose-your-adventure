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
        level_1_wins: {
            type: DataTypes.INTEGER
        },
        level_2_wins: {
            type: DataTypes.INTEGER
        },
        level_3_wins: {
            type: DataTypes.INTEGER
        },
        losses: {
            type: DataTypes.INTEGER
        },
        character_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'character',
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