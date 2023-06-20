const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HTL_SC_TM_Type', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fk_snapshot_time_secs_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT32_Type',
        key: 'iid'
      }
    },
    fk_exp1_horizontal_heated_plate_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp2_vertical_heated_plate_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp3_horizontal_heated_plate_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp4_inner_vertical_plate_surface_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp4_intermediate_heated_plate_surface_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp4_exterior_plate_surface_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp1_air_cavity_intermediate_height_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp1_air_cavity_upper_height_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp2_air_cavity_intermediate_height_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp2_air_cavity_upper_height_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp3_air_cavity_intermediate_height_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp3_air_cavity_upper_height_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp4_air_cavity_small_intermediate_1_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp4_air_cavity_small_intermediate_2_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp4_air_cavity_big_intermediate_1_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_exp4_air_cavity_big_intermediate_2_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'INT16_Type',
        key: 'iid'
      }
    },
    fk_heaters_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HTL_SC_TM_Type_heaters',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'HTL_SC_TM_Type',
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
        name: "fk_exp1_horizontal_heated_plate_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp1_horizontal_heated_plate_iid" },
        ]
      },
      {
        name: "fk_exp2_vertical_heated_plate_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp2_vertical_heated_plate_iid" },
        ]
      },
      {
        name: "fk_exp3_horizontal_heated_plate_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp3_horizontal_heated_plate_iid" },
        ]
      },
      {
        name: "fk_exp4_inner_vertical_plate_surface_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp4_inner_vertical_plate_surface_iid" },
        ]
      },
      {
        name: "fk_exp4_intermediate_heated_plate_surface_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp4_intermediate_heated_plate_surface_iid" },
        ]
      },
      {
        name: "fk_exp4_exterior_plate_surface_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp4_exterior_plate_surface_iid" },
        ]
      },
      {
        name: "fk_exp1_air_cavity_intermediate_height_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp1_air_cavity_intermediate_height_iid" },
        ]
      },
      {
        name: "fk_exp1_air_cavity_upper_height_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp1_air_cavity_upper_height_iid" },
        ]
      },
      {
        name: "fk_exp2_air_cavity_intermediate_height_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp2_air_cavity_intermediate_height_iid" },
        ]
      },
      {
        name: "fk_exp2_air_cavity_upper_height_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp2_air_cavity_upper_height_iid" },
        ]
      },
      {
        name: "fk_exp3_air_cavity_intermediate_height_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp3_air_cavity_intermediate_height_iid" },
        ]
      },
      {
        name: "fk_exp3_air_cavity_upper_height_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp3_air_cavity_upper_height_iid" },
        ]
      },
      {
        name: "fk_exp4_air_cavity_small_intermediate_1_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp4_air_cavity_small_intermediate_1_iid" },
        ]
      },
      {
        name: "fk_exp4_air_cavity_small_intermediate_2_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp4_air_cavity_small_intermediate_2_iid" },
        ]
      },
      {
        name: "fk_exp4_air_cavity_big_intermediate_1_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp4_air_cavity_big_intermediate_1_iid" },
        ]
      },
      {
        name: "fk_exp4_air_cavity_big_intermediate_2_iid",
        using: "BTREE",
        fields: [
          { name: "fk_exp4_air_cavity_big_intermediate_2_iid" },
        ]
      },
      {
        name: "fk_heaters_iid",
        using: "BTREE",
        fields: [
          { name: "fk_heaters_iid" },
        ]
      },
    ]
  });
};
