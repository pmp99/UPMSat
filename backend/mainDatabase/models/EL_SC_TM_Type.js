const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL_SC_TM_Type', {
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
    fk_upwards_pyranometer_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_upwards_pyrgeometer_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_downwards_pyranometer_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_downwards_pyrgeometer_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_dif_barometers_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EL_SC_TM_Type_dif_barometers',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'EL_SC_TM_Type',
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
        name: "fk_upwards_pyranometer_iid",
        using: "BTREE",
        fields: [
          { name: "fk_upwards_pyranometer_iid" },
        ]
      },
      {
        name: "fk_upwards_pyrgeometer_iid",
        using: "BTREE",
        fields: [
          { name: "fk_upwards_pyrgeometer_iid" },
        ]
      },
      {
        name: "fk_downwards_pyranometer_iid",
        using: "BTREE",
        fields: [
          { name: "fk_downwards_pyranometer_iid" },
        ]
      },
      {
        name: "fk_downwards_pyrgeometer_iid",
        using: "BTREE",
        fields: [
          { name: "fk_downwards_pyrgeometer_iid" },
        ]
      },
      {
        name: "fk_dif_barometers_iid",
        using: "BTREE",
        fields: [
          { name: "fk_dif_barometers_iid" },
        ]
      },
    ]
  });
};
