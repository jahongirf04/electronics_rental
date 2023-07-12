const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Otp = sequelize.define(
  "otp",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    otp: {
      type: DataTypes.STRING
    },
    expiration_time: {
      type: DataTypes.DATE
    }
  }
  // {
  //         freezeTableName: true,
  //        timestamps: false
  //     })
);

module.exports = Otp;
