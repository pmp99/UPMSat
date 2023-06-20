const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMU_Calibration_Commands', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kind: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_set_calibration_offsets_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'IMU_CalibrationOffsets',
        key: 'iid'
      }
    },
    fk_set_imu_operating_mode_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'IMU_OperatingMode',
        key: 'iid'
      }
    },
    fk_set_axes_configuration_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'IMU_AxesConfiguration',
        key: 'iid'
      }
    },
    fk_restart_imu_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Null_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'IMU_Calibration_Commands',
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
        name: "fk_set_calibration_offsets_iid",
        using: "BTREE",
        fields: [
          { name: "fk_set_calibration_offsets_iid" },
        ]
      },
      {
        name: "fk_set_imu_operating_mode_iid",
        using: "BTREE",
        fields: [
          { name: "fk_set_imu_operating_mode_iid" },
        ]
      },
      {
        name: "fk_set_axes_configuration_iid",
        using: "BTREE",
        fields: [
          { name: "fk_set_axes_configuration_iid" },
        ]
      },
      {
        name: "fk_restart_imu_iid",
        using: "BTREE",
        fields: [
          { name: "fk_restart_imu_iid" },
        ]
      },
    ]
  });
};
