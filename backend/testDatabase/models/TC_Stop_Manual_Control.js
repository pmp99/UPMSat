const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TC_Stop_Manual_Control', {
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
    }
  }, {
    sequelize,
    tableName: 'TC_Stop_Manual_Control',
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
    ]
  });
};
