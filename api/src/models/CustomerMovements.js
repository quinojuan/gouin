const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'CustomerMovements',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			CustomerId:{
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: false
            },
            MovementId:{
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: false
            }
		},
		{
			freezeTableName: true,
		}
	);
};