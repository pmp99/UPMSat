const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Absolute_Barometer', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_pressure_raw_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_pressure_mbar_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_temperature_raw_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_temperature_celsius_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'Absolute_Barometer',
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
        name: "fk_pressure_raw_iid",
        using: "BTREE",
        fields: [
          { name: "fk_pressure_raw_iid" },
        ]
      },
      {
        name: "fk_pressure_mbar_iid",
        using: "BTREE",
        fields: [
          { name: "fk_pressure_mbar_iid" },
        ]
      },
      {
        name: "fk_temperature_raw_iid",
        using: "BTREE",
        fields: [
          { name: "fk_temperature_raw_iid" },
        ]
      },
      {
        name: "fk_temperature_celsius_iid",
        using: "BTREE",
        fields: [
          { name: "fk_temperature_celsius_iid" },
        ]
      },
    ]
  });
};
