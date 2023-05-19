const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TM_Type', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kind: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_housekeeping_tm_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HK_TM_Type',
        key: 'iid'
      }
    },
    fk_scientific_tm_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SC_TM_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'TM_Type',
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
        name: "fk_housekeeping_tm_iid",
        using: "BTREE",
        fields: [
          { name: "fk_housekeeping_tm_iid" },
        ]
      },
      {
        name: "fk_scientific_tm_iid",
        using: "BTREE",
        fields: [
          { name: "fk_scientific_tm_iid" },
        ]
      },
    ]
  });
};
