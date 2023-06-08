const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NADS_Data', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_snapshot_time_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Absolute_Time_Type',
        key: 'iid'
      }
    },
    fk_mission_time_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_mode_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NADS_Mode',
        key: 'iid'
      }
    },
    fk_payload_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NADS_Data_payload',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'NADS_Data',
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
        name: "fk_snapshot_time_iid",
        using: "BTREE",
        fields: [
          { name: "fk_snapshot_time_iid" },
        ]
      },
      {
        name: "fk_mission_time_iid",
        using: "BTREE",
        fields: [
          { name: "fk_mission_time_iid" },
        ]
      },
      {
        name: "fk_mode_iid",
        using: "BTREE",
        fields: [
          { name: "fk_mode_iid" },
        ]
      },
      {
        name: "fk_payload_iid",
        using: "BTREE",
        fields: [
          { name: "fk_payload_iid" },
        ]
      },
    ]
  });
};
