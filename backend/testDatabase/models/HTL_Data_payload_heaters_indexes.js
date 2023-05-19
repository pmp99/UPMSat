const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HTL_Data_payload_heaters_indexes', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idx: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_HTL_Data_payload_heaters_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HTL_Data_payload_heaters',
        key: 'iid'
      }
    },
    fk_Heater_Power_Type_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Heater_Power_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'HTL_Data_payload_heaters_indexes',
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
        name: "idx",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
          { name: "fk_HTL_Data_payload_heaters_iid" },
        ]
      },
      {
        name: "fk_HTL_Data_payload_heaters_iid",
        using: "BTREE",
        fields: [
          { name: "fk_HTL_Data_payload_heaters_iid" },
        ]
      },
      {
        name: "fk_Heater_Power_Type_iid",
        using: "BTREE",
        fields: [
          { name: "fk_Heater_Power_Type_iid" },
        ]
      },
    ]
  });
};
