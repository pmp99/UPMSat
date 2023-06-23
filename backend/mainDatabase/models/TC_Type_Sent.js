const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TC_Type_Sent', {
        iid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    }, {
        sequelize,
        tableName: 'TC_Type_Sent',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "iid" },
                ]
            },
            {
                name: "iid",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "iid" },
                ]
            }
        ]
    });
};
