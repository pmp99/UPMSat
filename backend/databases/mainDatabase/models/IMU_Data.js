const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMU_Data', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_sensors_data_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_Sensors_Data',
        key: 'iid'
      }
    },
    fk_fusion_data_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_Fusion_Data',
        key: 'iid'
      }
    },
    fk_temperatures_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_Temperatures',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'IMU_Data',
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
        name: "fk_sensors_data_iid",
        using: "BTREE",
        fields: [
          { name: "fk_sensors_data_iid" },
        ]
      },
      {
        name: "fk_fusion_data_iid",
        using: "BTREE",
        fields: [
          { name: "fk_fusion_data_iid" },
        ]
      },
      {
        name: "fk_temperatures_iid",
        using: "BTREE",
        fields: [
          { name: "fk_temperatures_iid" },
        ]
      },
    ]
  });
};
