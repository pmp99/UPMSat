const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMU_Parameters_calibration_parameters_calibration_states', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_platform_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_CalibrationLevel',
        key: 'iid'
      }
    },
    fk_gyroscope_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_CalibrationLevel',
        key: 'iid'
      }
    },
    fk_accelerometer_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_CalibrationLevel',
        key: 'iid'
      }
    },
    fk_magnetometer_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_CalibrationLevel',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'IMU_Parameters_calibration_parameters_calibration_states',
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
        name: "fk_platform_iid",
        using: "BTREE",
        fields: [
          { name: "fk_platform_iid" },
        ]
      },
      {
        name: "fk_gyroscope_iid",
        using: "BTREE",
        fields: [
          { name: "fk_gyroscope_iid" },
        ]
      },
      {
        name: "fk_accelerometer_iid",
        using: "BTREE",
        fields: [
          { name: "fk_accelerometer_iid" },
        ]
      },
      {
        name: "fk_magnetometer_iid",
        using: "BTREE",
        fields: [
          { name: "fk_magnetometer_iid" },
        ]
      },
    ]
  });
};
