const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Movements',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			date: {
				type: DataTypes.DATE,
			},
            price:{
                type: DataTypes.FLOAT,
            },
			notes: {
				type: DataTypes.TEXT,
				defaultValue: false,
			},
		},
		{
			freezeTableName: true,
		}
	);
};