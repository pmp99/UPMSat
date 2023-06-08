const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PCU_PS_Lines_Status', {
    iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_al_line_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Switch_Status',
        key: 'iid'
      }
    },
    fk_tmu_line_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Switch_Status',
        key: 'iid'
      }
    },
    fk_sdpu_line_iid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Switch_Status',
        key: 'iid'
      }
    }
  }, {
    sequelize,
    tableName: 'PCU_PS_Lines_Status',
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
        name: "fk_al_line_iid",
        using: "BTREE",
        fields: [
          { name: "fk_al_line_iid" },
        ]
      },
      {
        name: "fk_tmu_line_iid",
        using: "BTREE",
        fields: [
          { name: "fk_tmu_line_iid" },
        ]
      },
      {
        name: "fk_sdpu_line_iid",
        using: "BTREE",
        fields: [
          { name: "fk_sdpu_line_iid" },
        ]
      },
    ]
  });
};
