const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_Null_Record', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'T_Null_Record',
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
    ]
  });
};
