const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SC_TM_Type_payload', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_htl_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HTL_SC_TM_Type',
        key: 'iid'
      }
    },
    fk_el_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EL_SC_TM_Type',
        key: 'iid'
      }
    },
    fk_nads_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NADS_SC_TM_Type',
        key: 'iid'
      }
    },
    fk_atl_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ATL_SC_TM_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'SC_TM_Type_payload',
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
        name: "fk_htl_iid",
        using: "BTREE",
        fields: [
          { name: "fk_htl_iid" },
        ]
      },
      {
        name: "fk_el_iid",
        using: "BTREE",
        fields: [
          { name: "fk_el_iid" },
        ]
      },
      {
        name: "fk_nads_iid",
        using: "BTREE",
        fields: [
          { name: "fk_nads_iid" },
        ]
      },
      {
        name: "fk_atl_iid",
        using: "BTREE",
        fields: [
          { name: "fk_atl_iid" },
        ]
      },
    ]
  });
};
