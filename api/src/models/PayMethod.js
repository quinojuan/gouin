const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'PayMethod',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
		    method:{
                type: DataTypes.ENUM(`tarjeta`, `efectivo`, `cuentaDeJulio`, `cuentaDeMartin`, `cheques`)
            },
		},
		{
			freezeTableName: true,
		}
	);
};