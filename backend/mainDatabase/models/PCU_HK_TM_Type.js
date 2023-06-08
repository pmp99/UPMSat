const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PCU_HK_TM_Type', {
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
    fk_temperature_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT8_Type',
        key: 'iid'
      }
    },
    fk_v_bat_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_a_bat_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FLOAT32_Type',
        key: 'iid'
      }
    },
    fk_switches_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PCU_PS_Lines_Status',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'PCU_HK_TM_Type',
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
        name: "fk_temperature_iid",
        using: "BTREE",
        fields: [
          { name: "fk_temperature_iid" },
        ]
      },
      {
        name: "fk_v_bat_iid",
        using: "BTREE",
        fields: [
          { name: "fk_v_bat_iid" },
        ]
      },
      {
        name: "fk_a_bat_iid",
        using: "BTREE",
        fields: [
          { name: "fk_a_bat_iid" },
        ]
      },
      {
        name: "fk_switches_iid",
        using: "BTREE",
        fields: [
          { name: "fk_switches_iid" },
        ]
      },
    ]
  });
};
