const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMU_Fusion_Data', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_euler_orientation_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Axis_Data',
        key: 'iid'
      }
    },
    fk_liner_acceleration_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Axis_Data',
        key: 'iid'
      }
    },
    fk_gravity_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Axis_Data',
        key: 'iid'
      }
    },
    fk_quaternion_orientation_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Quaternion_Data',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'IMU_Fusion_Data',
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
        name: "fk_euler_orientation_iid",
        using: "BTREE",
        fields: [
          { name: "fk_euler_orientation_iid" },
        ]
      },
      {
        name: "fk_liner_acceleration_iid",
        using: "BTREE",
        fields: [
          { name: "fk_liner_acceleration_iid" },
        ]
      },
      {
        name: "fk_gravity_iid",
        using: "BTREE",
        fields: [
          { name: "fk_gravity_iid" },
        ]
      },
      {
        name: "fk_quaternion_orientation_iid",
        using: "BTREE",
        fields: [
          { name: "fk_quaternion_orientation_iid" },
        ]
      },
    ]
  });
};
