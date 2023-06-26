const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMU_AxisSelection', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_sign_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_AxisSelection_sign',
        key: 'iid'
      }
    },
    fk_remap_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_AxisSelection_remap',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'IMU_AxisSelection',
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
        name: "fk_sign_iid",
        using: "BTREE",
        fields: [
          { name: "fk_sign_iid" },
        ]
      },
      {
        name: "fk_remap_iid",
        using: "BTREE",
        fields: [
          { name: "fk_remap_iid" },
        ]
      },
    ]
  });
};
