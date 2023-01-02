const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'MovementPayMethod',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			MovementId:{
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: false
            },
            MethodId:{
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