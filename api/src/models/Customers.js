const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Customers',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			name: {
				type: DataTypes.STRING,
			},
            last_name:{
                type: DataTypes.STRING,
            },
			dni:{
				type: DataTypes.STRING,
				unique: true
			}

		},
		{
			freezeTableName: true,
		}
	);
};