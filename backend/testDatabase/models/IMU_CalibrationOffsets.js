const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMU_CalibrationOffsets', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_accel_offset_x_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_accel_offset_y_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_accel_offset_z_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_gyro_offset_x_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_gyro_offset_y_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_gyro_offset_z_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_mgm_offset_x_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_mgm_offset_y_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_mgm_offset_z_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_accel_radius_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_mgm_radius_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'IMU_CalibrationOffsets',
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
        name: "fk_accel_offset_x_iid",
        using: "BTREE",
        fields: [
          { name: "fk_accel_offset_x_iid" },
        ]
      },
      {
        name: "fk_accel_offset_y_iid",
        using: "BTREE",
        fields: [
          { name: "fk_accel_offset_y_iid" },
        ]
      },
      {
        name: "fk_accel_offset_z_iid",
        using: "BTREE",
        fields: [
          { name: "fk_accel_offset_z_iid" },
        ]
      },
      {
        name: "fk_gyro_offset_x_iid",
        using: "BTREE",
        fields: [
          { name: "fk_gyro_offset_x_iid" },
        ]
      },
      {
        name: "fk_gyro_offset_y_iid",
        using: "BTREE",
        fields: [
          { name: "fk_gyro_offset_y_iid" },
        ]
      },
      {
        name: "fk_gyro_offset_z_iid",
        using: "BTREE",
        fields: [
          { name: "fk_gyro_offset_z_iid" },
        ]
      },
      {
        name: "fk_mgm_offset_x_iid",
        using: "BTREE",
        fields: [
          { name: "fk_mgm_offset_x_iid" },
        ]
      },
      {
        name: "fk_mgm_offset_y_iid",
        using: "BTREE",
        fields: [
          { name: "fk_mgm_offset_y_iid" },
        ]
      },
      {
        name: "fk_mgm_offset_z_iid",
        using: "BTREE",
        fields: [
          { name: "fk_mgm_offset_z_iid" },
        ]
      },
      {
        name: "fk_accel_radius_iid",
        using: "BTREE",
        fields: [
          { name: "fk_accel_radius_iid" },
        ]
      },
      {
        name: "fk_mgm_radius_iid",
        using: "BTREE",
        fields: [
          { name: "fk_mgm_radius_iid" },
        ]
      },
    ]
  });
};
