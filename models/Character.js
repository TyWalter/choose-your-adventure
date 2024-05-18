const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model { };

Character.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		charname: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		user_id: {
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

