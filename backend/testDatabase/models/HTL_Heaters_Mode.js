const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HTL_Heaters_Mode', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_experiment_1_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Actuator_Control_Mode',
        key: 'iid'
      }
    },
    fk_experiment_2_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Actuator_Control_Mode',
        key: 'iid'
      }
    },
    fk_experiment_3_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Actuator_Control_Mode',
        key: 'iid'
      }
    },
    fk_experiment_4_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Actuator_Control_Mode',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'HTL_Heaters_Mode',
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
        name: "fk_experiment_1_iid",
        using: "BTREE",
        fields: [
          { name: "fk_experiment_1_iid" },
        ]
      },
      {
        name: "fk_experiment_2_iid",
        using: "BTREE",
        fields: [
          { name: "fk_experiment_2_iid" },
        ]
      },
      {
        name: "fk_experiment_3_iid",
        using: "BTREE",
        fields: [
          { name: "fk_experiment_3_iid" },
        ]
      },
      {
        name: "fk_experiment_4_iid",
        using: "BTREE",
        fields: [
          { name: "fk_experiment_4_iid" },
        ]
      },
    ]
  });
};
