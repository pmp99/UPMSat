const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMU_CalibrationLevel', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'IMU_CalibrationLevel',
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
      },
    ]
  });
};
