const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'MovementCheque',
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
            ChequeId:{
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