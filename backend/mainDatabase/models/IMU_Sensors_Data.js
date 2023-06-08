const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMU_Sensors_Data', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_acceleration_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Axis_Data',
        key: 'iid'
      }
    },
    fk_mag_field_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Axis_Data',
        key: 'iid'
      }
    },
    fk_angular_velocity_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Axis_Data',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'IMU_Sensors_Data',
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
        name: "fk_acceleration_iid",
        using: "BTREE",
        fields: [
          { name: "fk_acceleration_iid" },
        ]
      },
      {
        name: "fk_mag_field_iid",
        using: "BTREE",
        fields: [
          { name: "fk_mag_field_iid" },
        ]
      },
      {
        name: "fk_angular_velocity_iid",
        using: "BTREE",
        fields: [
          { name: "fk_angular_velocity_iid" },
        ]
      },
    ]
  });
};
