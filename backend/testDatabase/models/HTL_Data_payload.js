const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HTL_Data_payload', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_thermistors_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HTL_Data_payload_thermistors',
        key: 'iid'
      }
    },
    fk_heaters_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HTL_Data_payload_heaters',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'HTL_Data_payload',
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
        name: "fk_thermistors_iid",
        using: "BTREE",
        fields: [
          { name: "fk_thermistors_iid" },
        ]
      },
      {
        name: "fk_heaters_iid",
        using: "BTREE",
        fields: [
          { name: "fk_heaters_iid" },
        ]
      },
    ]
  });
};
