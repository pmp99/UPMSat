const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HTL_Mode', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_mode_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HTL_Mode_mode',
        key: 'iid'
      }
    },
    fk_heaters_mode_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HTL_Heaters_Mode',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'HTL_Mode',
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
        name: "fk_mode_iid",
        using: "BTREE",
        fields: [
          { name: "fk_mode_iid" },
        ]
      },
      {
        name: "fk_heaters_mode_iid",
        using: "BTREE",
        fields: [
          { name: "fk_heaters_mode_iid" },
        ]
      },
    ]
  });
};
