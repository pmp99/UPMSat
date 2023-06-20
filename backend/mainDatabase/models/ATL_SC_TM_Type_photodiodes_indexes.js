const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ATL_SC_TM_Type_photodiodes_indexes', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idx: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_ATL_SC_TM_Type_photodiodes_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ATL_SC_TM_Type_photodiodes',
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
    tableName: 'ATL_SC_TM_Type_photodiodes_indexes',
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
          { name: "fk_ATL_SC_TM_Type_photodiodes_iid" },
        ]
      },
      {
        name: "fk_ATL_SC_TM_Type_photodiodes_iid",
        using: "BTREE",
        fields: [
          { name: "fk_ATL_SC_TM_Type_photodiodes_iid" },
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
