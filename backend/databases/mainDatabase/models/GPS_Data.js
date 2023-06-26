const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GPS_Data', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_time_secs_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT32_Type',
        key: 'iid'
      }
    },
    fk_time_nsecs_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT32_Type',
        key: 'iid'
      }
    },
    fk_latitude_deg_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_longitude_deg_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_altitude_m_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_sog_knots_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_cog_deg_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'GPS_Data',
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
        name: "fk_time_secs_iid",
        using: "BTREE",
        fields: [
          { name: "fk_time_secs_iid" },
        ]
      },
      {
        name: "fk_time_nsecs_iid",
        using: "BTREE",
        fields: [
          { name: "fk_time_nsecs_iid" },
        ]
      },
      {
        name: "fk_latitude_deg_iid",
        using: "BTREE",
        fields: [
          { name: "fk_latitude_deg_iid" },
        ]
      },
      {
        name: "fk_longitude_deg_iid",
        using: "BTREE",
        fields: [
          { name: "fk_longitude_deg_iid" },
        ]
      },
      {
        name: "fk_altitude_m_iid",
        using: "BTREE",
        fields: [
          { name: "fk_altitude_m_iid" },
        ]
      },
      {
        name: "fk_sog_knots_iid",
        using: "BTREE",
        fields: [
          { name: "fk_sog_knots_iid" },
        ]
      },
      {
        name: "fk_cog_deg_iid",
        using: "BTREE",
        fields: [
          { name: "fk_cog_deg_iid" },
        ]
      },
    ]
  });
};
