const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL_SC_TM_Type_dif_barometers_indexes', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idx: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_EL_SC_TM_Type_dif_barometers_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EL_SC_TM_Type_dif_barometers',
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
    tableName: 'EL_SC_TM_Type_dif_barometers_indexes',
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
          { name: "fk_EL_SC_TM_Type_dif_barometers_iid" },
        ]
      },
      {
        name: "fk_EL_SC_TM_Type_dif_barometers_iid",
        using: "BTREE",
        fields: [
          { name: "fk_EL_SC_TM_Type_dif_barometers_iid" },
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
