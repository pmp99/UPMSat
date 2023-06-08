const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DP_Data', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_pcu_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PCU_Data',
        key: 'iid'
      }
    },
    fk_htl_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HTL_Data',
        key: 'iid'
      }
    },
    fk_enl_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EnvLab_Data',
        key: 'iid'
      }
    },
    fk_nad_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NADS_Data',
        key: 'iid'
      }
    },
    fk_atl_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Att_Lab_Data',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'DP_Data',
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
        name: "fk_pcu_iid",
        using: "BTREE",
        fields: [
          { name: "fk_pcu_iid" },
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
        name: "fk_enl_iid",
        using: "BTREE",
        fields: [
          { name: "fk_enl_iid" },
        ]
      },
      {
        name: "fk_nad_iid",
        using: "BTREE",
        fields: [
          { name: "fk_nad_iid" },
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
