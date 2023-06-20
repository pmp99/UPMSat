const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HK_TM_Type_payload', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_atl_hk_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ATL_HK_TM_Type',
        key: 'iid'
      }
    },
    fk_pcu_hk_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PCU_HK_TM_Type',
        key: 'iid'
      }
    },
    fk_el_hk_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EL_HK_TM_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'HK_TM_Type_payload',
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
        name: "fk_atl_hk_iid",
        using: "BTREE",
        fields: [
          { name: "fk_atl_hk_iid" },
        ]
      },
      {
        name: "fk_pcu_hk_iid",
        using: "BTREE",
        fields: [
          { name: "fk_pcu_hk_iid" },
        ]
      },
      {
        name: "fk_el_hk_iid",
        using: "BTREE",
        fields: [
          { name: "fk_el_hk_iid" },
        ]
      },
    ]
  });
};
