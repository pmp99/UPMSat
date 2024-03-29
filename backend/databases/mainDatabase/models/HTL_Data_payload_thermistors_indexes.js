const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HTL_Data_payload_thermistors_indexes', {
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
    fk_HTL_Data_payload_thermistors_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HTL_Data_payload_thermistors',
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
    tableName: 'HTL_Data_payload_thermistors_indexes',
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
          { name: "fk_HTL_Data_payload_thermistors_iid" },
        ]
      },
      {
        name: "fk_HTL_Data_payload_thermistors_iid",
        using: "BTREE",
        fields: [
          { name: "fk_HTL_Data_payload_thermistors_iid" },
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
