const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EnvLab_Experiment_Data_Sensors', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_pyranometer_reading_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_pyrgeometer_reading_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_pyranometer_temperature_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_pyrgeometer_temperature_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'EnvLab_Experiment_Data_Sensors',
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
        name: "fk_pyranometer_reading_iid",
        using: "BTREE",
        fields: [
          { name: "fk_pyranometer_reading_iid" },
        ]
      },
      {
        name: "fk_pyrgeometer_reading_iid",
        using: "BTREE",
        fields: [
          { name: "fk_pyrgeometer_reading_iid" },
        ]
      },
      {
        name: "fk_pyranometer_temperature_iid",
        using: "BTREE",
        fields: [
          { name: "fk_pyranometer_temperature_iid" },
        ]
      },
      {
        name: "fk_pyrgeometer_temperature_iid",
        using: "BTREE",
        fields: [
          { name: "fk_pyrgeometer_temperature_iid" },
        ]
      },
    ]
  });
};
