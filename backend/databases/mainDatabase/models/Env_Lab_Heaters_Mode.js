const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Env_Lab_Heaters_Mode', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_upwards_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Actuator_Control_Mode',
        key: 'iid'
      }
    },
    fk_downwards_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Actuator_Control_Mode',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'Env_Lab_Heaters_Mode',
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
        name: "fk_upwards_iid",
        using: "BTREE",
        fields: [
          { name: "fk_upwards_iid" },
        ]
      },
      {
        name: "fk_downwards_iid",
        using: "BTREE",
        fields: [
          { name: "fk_downwards_iid" },
        ]
      },
    ]
  });
};
