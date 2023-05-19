const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NADS_SC_TM_Type', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_snapshot_time_secs_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT32_Type',
        key: 'iid'
      }
    },
    fk_imu_sensors_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_Sensors_Data',
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
    tableName: 'NADS_SC_TM_Type',
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
        name: "fk_snapshot_time_secs_iid",
        using: "BTREE",
        fields: [
          { name: "fk_snapshot_time_secs_iid" },
        ]
      },
      {
        name: "fk_imu_sensors_iid",
        using: "BTREE",
        fields: [
          { name: "fk_imu_sensors_iid" },
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
