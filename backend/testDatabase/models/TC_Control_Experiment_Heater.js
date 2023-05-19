const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TC_Control_Experiment_Heater', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_heater_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Heater_ID',
        key: 'iid'
      }
    },
    fk_heater_power_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Heater_Power_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'TC_Control_Experiment_Heater',
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
        name: "fk_heater_power_iid",
        using: "BTREE",
        fields: [
          { name: "fk_heater_power_iid" },
        ]
      },
    ]
  });
};
