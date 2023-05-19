const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Axis_Data', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_x_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_y_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_z_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'Axis_Data',
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
        name: "fk_x_iid",
        using: "BTREE",
        fields: [
          { name: "fk_x_iid" },
        ]
      },
      {
        name: "fk_y_iid",
        using: "BTREE",
        fields: [
          { name: "fk_y_iid" },
        ]
      },
      {
        name: "fk_z_iid",
        using: "BTREE",
        fields: [
          { name: "fk_z_iid" },
        ]
      },
    ]
  });
};
