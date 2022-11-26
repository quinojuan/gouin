const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Acts',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			act:{
                type: DataTypes.STRING
            }
		},
		{
			freezeTableName: true,
		}
	);
};