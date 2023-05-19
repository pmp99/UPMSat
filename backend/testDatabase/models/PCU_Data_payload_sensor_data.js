const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PCU_Data_payload_sensor_data', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_power_watts_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_current_amps_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_voltage_bus_volts_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_voltage_shunt_volts_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_digital_temperature_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT8_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'PCU_Data_payload_sensor_data',
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
        name: "fk_power_watts_iid",
        using: "BTREE",
        fields: [
          { name: "fk_power_watts_iid" },
        ]
      },
      {
        name: "fk_current_amps_iid",
        using: "BTREE",
        fields: [
          { name: "fk_current_amps_iid" },
        ]
      },
      {
        name: "fk_voltage_bus_volts_iid",
        using: "BTREE",
        fields: [
          { name: "fk_voltage_bus_volts_iid" },
        ]
      },
      {
        name: "fk_voltage_shunt_volts_iid",
        using: "BTREE",
        fields: [
          { name: "fk_voltage_shunt_volts_iid" },
        ]
      },
      {
        name: "fk_digital_temperature_iid",
        using: "BTREE",
        fields: [
          { name: "fk_digital_temperature_iid" },
        ]
      },
    ]
  });
};
