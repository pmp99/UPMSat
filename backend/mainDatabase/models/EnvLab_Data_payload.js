const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EnvLab_Data_payload', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_upwards_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EnvLab_Experiment_Data',
        key: 'iid'
      }
    },
    fk_downwards_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EnvLab_Experiment_Data',
        key: 'iid'
      }
    },
    fk_pressure_data_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EnvLab_Pressure_Data',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'EnvLab_Data_payload',
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
        name: "fk_upwards_iid",
        using: "BTREE",
        fields: [
          { name: "fk_upwards_iid" },
        ]
      },
      {
        name: "fk_downwards_iid",
        using: "BTREE",
        fields: [
          { name: "fk_downwards_iid" },
        ]
      },
      {
        name: "fk_pressure_data_iid",
        using: "BTREE",
        fields: [
          { name: "fk_pressure_data_iid" },
        ]
      },
    ]
  });
};
