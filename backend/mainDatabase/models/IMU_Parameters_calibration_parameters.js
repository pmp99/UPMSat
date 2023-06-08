const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMU_Parameters_calibration_parameters', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_calibration_complete_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TaStE_Calibration_complete_type',
        key: 'iid'
      }
    },
    fk_calibration_states_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_Parameters_calibration_parameters_calibration_states',
        key: 'iid'
      }
    },
    fk_offsets_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IMU_CalibrationOffsets',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'IMU_Parameters_calibration_parameters',
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
        name: "fk_calibration_complete_iid",
        using: "BTREE",
        fields: [
          { name: "fk_calibration_complete_iid" },
        ]
      },
      {
        name: "fk_calibration_states_iid",
        using: "BTREE",
        fields: [
          { name: "fk_calibration_states_iid" },
        ]
      },
      {
        name: "fk_offsets_iid",
        using: "BTREE",
        fields: [
          { name: "fk_offsets_iid" },
        ]
      },
    ]
  });
};
