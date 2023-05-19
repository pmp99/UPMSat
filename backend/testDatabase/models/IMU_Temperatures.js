const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMU_Temperatures', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_temperature_accel_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT8_Type',
        key: 'iid'
      }
    },
    fk_temperature_gyro_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT8_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'IMU_Temperatures',
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
      {
        name: "fk_temperature_accel_iid",
        using: "BTREE",
        fields: [
          { name: "fk_temperature_accel_iid" },
        ]
      },
      {
        name: "fk_temperature_gyro_iid",
        using: "BTREE",
        fields: [
          { name: "fk_temperature_gyro_iid" },
        ]
      },
    ]
  });
};
