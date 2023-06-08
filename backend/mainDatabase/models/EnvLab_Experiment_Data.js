const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EnvLab_Experiment_Data', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_heater_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Switch_Status',
        key: 'iid'
      }
    },
    fk_analogue_data_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EnvLab_Experiment_Data_Sensors',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'EnvLab_Experiment_Data',
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
        name: "fk_heater_iid",
        using: "BTREE",
        fields: [
          { name: "fk_heater_iid" },
        ]
      },
      {
        name: "fk_analogue_data_iid",
        using: "BTREE",
        fields: [
          { name: "fk_analogue_data_iid" },
        ]
      },
    ]
  });
};
