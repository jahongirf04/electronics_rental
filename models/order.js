const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_id: {
      type: DataTypes.INTEGER,
    },
    shop_electronics_id: {
      type: DataTypes.INTEGER,
    },
    order_time: {
      type: DataTypes.DATE,
    },
    period: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.FLOAT
    }
  }
  // {
  //         freezeTableName: true,
  //        timestamps: false
  //     })
);

module.exports = Order;
