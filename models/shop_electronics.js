const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Shop_electronics = sequelize.define(
  "shop_electronics",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    shop_id: {
      type: DataTypes.INTEGER,
    },
    electronic_id: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.FLOAT,
    },
  }
  // {
  //         freezeTableName: true,
  //        timestamps: false
  //     })
);

module.exports = Shop_electronics;
