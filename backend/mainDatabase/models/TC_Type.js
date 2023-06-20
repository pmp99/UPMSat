const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TC_Type', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kind: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_change_balloon_mode_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TC_Change_Balloon_Mode',
        key: 'iid'
      }
    },
    fk_start_manual_control_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TC_Start_Manual_Control',
        key: 'iid'
      }
    },
    fk_stop_manual_control_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TC_Stop_Manual_Control',
        key: 'iid'
      }
    },
    fk_control_experiment_heater_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TC_Control_Experiment_Heater',
        key: 'iid'
      }
    },
    fk_restart_device_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TC_Restart_Device',
        key: 'iid'
      }
    },
    fk_change_tm_mode_iid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TC_Change_TM_Mode',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'TC_Type',
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
        name: "fk_change_balloon_mode_iid",
        using: "BTREE",
        fields: [
          { name: "fk_change_balloon_mode_iid" },
        ]
      },
      {
        name: "fk_start_manual_control_iid",
        using: "BTREE",
        fields: [
          { name: "fk_start_manual_control_iid" },
        ]
      },
      {
        name: "fk_stop_manual_control_iid",
        using: "BTREE",
        fields: [
          { name: "fk_stop_manual_control_iid" },
        ]
      },
      {
        name: "fk_control_experiment_heater_iid",
        using: "BTREE",
        fields: [
          { name: "fk_control_experiment_heater_iid" },
        ]
      },
      {
        name: "fk_restart_device_iid",
        using: "BTREE",
        fields: [
          { name: "fk_restart_device_iid" },
        ]
      },
      {
        name: "fk_change_tm_mode_iid",
        using: "BTREE",
        fields: [
          { name: "fk_change_tm_mode_iid" },
        ]
      },
    ]
  });
};
