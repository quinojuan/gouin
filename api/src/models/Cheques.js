const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Cheques',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			price:{
                type: DataTypes.STRING,
            },
            num_cheque: {
                type: DataTypes.FLOAT,
            },
            payment_date: {
                type: DataTypes.STRING
            },
            headline: {
                type: DataTypes.STRING
            }
		},
		{
			freezeTableName: true,
		}
	);
};