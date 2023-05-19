const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL_HK_TM_Type', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_snapshot_time_secs_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT32_Type',
        key: 'iid'
      }
    },
    fk_upwards_pyranometer_temperature_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_upwards_pyrgeometer_temperature_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_upwards_heater_status_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Switch_Status',
        key: 'iid'
      }
    },
    fk_downwards_pyranometer_temperature_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_downwards_pyrgeometer_temperature_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_downwards_heater_status_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Switch_Status',
        key: 'iid'
      }
    },
    fk_abs_pressure_mbar_1_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_abs_pressure_mbar_2_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'EL_HK_TM_Type',
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
        name: "fk_snapshot_time_secs_iid",
        using: "BTREE",
        fields: [
          { name: "fk_snapshot_time_secs_iid" },
        ]
      },
      {
        name: "fk_upwards_pyranometer_temperature_iid",
        using: "BTREE",
        fields: [
          { name: "fk_upwards_pyranometer_temperature_iid" },
        ]
      },
      {
        name: "fk_upwards_pyrgeometer_temperature_iid",
        using: "BTREE",
        fields: [
          { name: "fk_upwards_pyrgeometer_temperature_iid" },
        ]
      },
      {
        name: "fk_upwards_heater_status_iid",
        using: "BTREE",
        fields: [
          { name: "fk_upwards_heater_status_iid" },
        ]
      },
      {
        name: "fk_downwards_pyranometer_temperature_iid",
        using: "BTREE",
        fields: [
          { name: "fk_downwards_pyranometer_temperature_iid" },
        ]
      },
      {
        name: "fk_downwards_pyrgeometer_temperature_iid",
        using: "BTREE",
        fields: [
          { name: "fk_downwards_pyrgeometer_temperature_iid" },
        ]
      },
      {
        name: "fk_downwards_heater_status_iid",
        using: "BTREE",
        fields: [
          { name: "fk_downwards_heater_status_iid" },
        ]
      },
      {
        name: "fk_abs_pressure_mbar_1_iid",
        using: "BTREE",
        fields: [
          { name: "fk_abs_pressure_mbar_1_iid" },
        ]
      },
      {
        name: "fk_abs_pressure_mbar_2_iid",
        using: "BTREE",
        fields: [
          { name: "fk_abs_pressure_mbar_2_iid" },
        ]
      },
    ]
  });
};
