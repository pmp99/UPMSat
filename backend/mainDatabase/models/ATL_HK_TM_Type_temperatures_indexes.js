const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ATL_HK_TM_Type_temperatures_indexes', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idx: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_ATL_HK_TM_Type_temperatures_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ATL_HK_TM_Type_temperatures',
        key: 'iid'
      }
    },
    fk_INT16_Type_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'ATL_HK_TM_Type_temperatures_indexes',
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
          { name: "fk_ATL_HK_TM_Type_temperatures_iid" },
        ]
      },
      {
        name: "fk_ATL_HK_TM_Type_temperatures_iid",
        using: "BTREE",
        fields: [
          { name: "fk_ATL_HK_TM_Type_temperatures_iid" },
        ]
      },
      {
        name: "fk_INT16_Type_iid",
        using: "BTREE",
        fields: [
          { name: "fk_INT16_Type_iid" },
        ]
      },
    ]
  });
};
