const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Balance',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			amount: {
				type: DataTypes.INTEGER,
			}

		},
		{
			freezeTableName: true,
		}
	);
};