const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Att_Lab_Data_Measurements_thermistors_indexes', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idx: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_Att_Lab_Data_Measurements_thermistors_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Att_Lab_Data_Measurements_thermistors',
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
    tableName: 'Att_Lab_Data_Measurements_thermistors_indexes',
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
          { name: "fk_Att_Lab_Data_Measurements_thermistors_iid" },
        ]
      },
      {
        name: "fk_Att_Lab_Data_Measurements_thermistors_iid",
        using: "BTREE",
        fields: [
          { name: "fk_Att_Lab_Data_Measurements_thermistors_iid" },
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
