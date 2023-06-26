const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TC_Change_Balloon_Mode', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_new_mode_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Balloon_Mode',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'TC_Change_Balloon_Mode',
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
        name: "fk_new_mode_iid",
        using: "BTREE",
        fields: [
          { name: "fk_new_mode_iid" },
        ]
      },
    ]
  });
};
