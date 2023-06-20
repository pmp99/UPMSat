const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TC_Restart_Device', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_device_id_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Restartable_Device_ID',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'TC_Restart_Device',
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
        name: "fk_device_id_iid",
        using: "BTREE",
        fields: [
          { name: "fk_device_id_iid" },
        ]
      },
    ]
  });
};
