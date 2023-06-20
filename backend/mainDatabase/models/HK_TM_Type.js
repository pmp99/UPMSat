const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HK_TM_Type', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_sequence_number_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UINT32_Type',
        key: 'iid'
      }
    },
    fk_timestamp_secs_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT32_Type',
        key: 'iid'
      }
    },
    fk_balloon_mode_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Balloon_Mode',
        key: 'iid'
      }
    },
    fk_payload_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HK_TM_Type_payload',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'HK_TM_Type',
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
        name: "fk_sequence_number_iid",
        using: "BTREE",
        fields: [
          { name: "fk_sequence_number_iid" },
        ]
      },
      {
        name: "fk_timestamp_secs_iid",
        using: "BTREE",
        fields: [
          { name: "fk_timestamp_secs_iid" },
        ]
      },
      {
        name: "fk_balloon_mode_iid",
        using: "BTREE",
        fields: [
          { name: "fk_balloon_mode_iid" },
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
