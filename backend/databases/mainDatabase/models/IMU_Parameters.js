const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMU_Parameters', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_operating_mode_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_OperatingMode',
        key: 'iid'
      }
    },
    fk_axes_configuration_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_AxesConfiguration',
        key: 'iid'
      }
    },
    fk_calibration_parameters_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_Parameters_calibration_parameters',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'IMU_Parameters',
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
        name: "fk_operating_mode_iid",
        using: "BTREE",
        fields: [
          { name: "fk_operating_mode_iid" },
        ]
      },
      {
        name: "fk_axes_configuration_iid",
        using: "BTREE",
        fields: [
          { name: "fk_axes_configuration_iid" },
        ]
      },
      {
        name: "fk_calibration_parameters_iid",
        using: "BTREE",
        fields: [
          { name: "fk_calibration_parameters_iid" },
        ]
      },
    ]
  });
};
