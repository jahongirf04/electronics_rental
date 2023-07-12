const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Client = require("./client");

const Shop = sequelize.define("shop", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(32),
  },
  owner_name: {
    type: DataTypes.STRING(32),
  },
  phone_number: { type: DataTypes.STRING(16) },
  location: {
    type: DataTypes.STRING(256)
  },
  email: {
    type: DataTypes.STRING(64)
  }
});

// Shop.belongsTo(Client)
// Shop.belongsToMany(Client);
// Client.hasMany(Shop)

module.exports = Shop