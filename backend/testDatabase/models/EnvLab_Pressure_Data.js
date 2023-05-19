const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EnvLab_Pressure_Data', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_dif_barometers_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EnvLab_Pressure_Data_dif_barometers',
        key: 'iid'
      }
    },
    fk_abs_barometers_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EnvLab_Pressure_Data_abs_barometers',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'EnvLab_Pressure_Data',
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
        name: "fk_dif_barometers_iid",
        using: "BTREE",
        fields: [
          { name: "fk_dif_barometers_iid" },
        ]
      },
      {
        name: "fk_abs_barometers_iid",
        using: "BTREE",
        fields: [
          { name: "fk_abs_barometers_iid" },
        ]
      },
    ]
  });
};
