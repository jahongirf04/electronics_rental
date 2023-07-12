const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Admin = sequelize.define(
  "admin",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
    },
    email: {
      type: DataTypes.STRING(64),
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
  }
  // {
  //         freezeTableName: true,
  //        timestamps: false
  //     })
);

module.exports = Admin;
