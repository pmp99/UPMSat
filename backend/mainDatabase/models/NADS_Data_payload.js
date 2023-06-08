const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NADS_Data_payload', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_imu_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_Data',
        key: 'iid'
      }
    },
    fk_gps_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'GPS_Data',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'NADS_Data_payload',
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
        name: "fk_imu_iid",
        using: "BTREE",
        fields: [
          { name: "fk_imu_iid" },
        ]
      },
      {
        name: "fk_gps_iid",
        using: "BTREE",
        fields: [
          { name: "fk_gps_iid" },
        ]
      },
    ]
  });
};
