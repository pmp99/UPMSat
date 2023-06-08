const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ATL_SC_TM_Type', {
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
    fk_photodiodes_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ATL_SC_TM_Type_photodiodes',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'ATL_SC_TM_Type',
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
        name: "fk_photodiodes_iid",
        using: "BTREE",
        fields: [
          { name: "fk_photodiodes_iid" },
        ]
      },
    ]
  });
};
