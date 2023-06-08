const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Env_Lab_Mode', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_mode_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Env_Lab_Mode_mode',
        key: 'iid'
      }
    },
    fk_heaters_mode_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Env_Lab_Heaters_Mode',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'Env_Lab_Mode',
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
