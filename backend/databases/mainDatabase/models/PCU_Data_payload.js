const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PCU_Data_payload', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_sensor_data_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PCU_Data_payload_sensor_data',
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
    tableName: 'PCU_Data_payload',
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
        name: "fk_sensor_data_iid",
        using: "BTREE",
        fields: [
          { name: "fk_sensor_data_iid" },
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
