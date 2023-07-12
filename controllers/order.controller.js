const myModel = require("../models/order");

const get = async (ctx) => {
  try {
    const obj = await myModel.findAll();
    //const obj = await myModel.findAll({include: Shop});
    ctx.status = 200;
    ctx.body = obj;
  } catch (e) {
    ctx.status = 404;
    console.log(e.message);
  }
};

const getOne = async (ctx) => {
  try {
    const myId = ctx.params.id;
    const obj = await myModel.findByPk(myId);
    ctx.status = 200;
    ctx.body = obj;
  } catch (e) {
    ctx.status = 404;
    console.log(e.message);
  }
};

const add = async (ctx) => {
  try {
    const { name, phone_number } = ctx.request.body;
    const neww = await myModel.create({ name, phone_number });
    ctx.status = 200;
    ctx.body = neww;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e.message;
  }
};

const update = async (ctx) => {
  try {
    const myId = ctx.params.id;
    const { name } = ctx.request.body;
    await myModel.update({ name }, { where: { id: myId } });

    ctx.status = 200;
    ctx.body = "updated";
  } catch (e) {
    ctx.status = 500;
    ctx.body = e.message;
  }
};

const deleteOne = async (ctx) => {
  try {
    const myId = ctx.params.id;

    await myModel.destroy({ where: { id: myId } });

    ctx.status = 200;
    ctx.body = "deleted";
  } catch (e) {
    console.log(e.message);
    ctx.status = 400;
    ctx.body = e.message;
  }
};

module.exports = {
  get,
  getOne,
  add,
  update,
  deleteOne,
};
