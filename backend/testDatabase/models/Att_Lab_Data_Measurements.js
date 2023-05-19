const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Att_Lab_Data_Measurements', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_photodiodes_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Att_Lab_Data_Measurements_photodiodes',
        key: 'iid'
      }
    },
    fk_thermistors_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Att_Lab_Data_Measurements_thermistors',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'Att_Lab_Data_Measurements',
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
        name: "fk_photodiodes_iid",
        using: "BTREE",
        fields: [
          { name: "fk_photodiodes_iid" },
        ]
      },
      {
        name: "fk_thermistors_iid",
        using: "BTREE",
        fields: [
          { name: "fk_thermistors_iid" },
        ]
      },
    ]
  });
};
