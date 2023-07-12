const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Electronics = sequelize.define(
  "electronics",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
    }
  }
  // {
  //         freezeTableName: true,
  //        timestamps: false
  //     })
);

module.exports = Electronics;
