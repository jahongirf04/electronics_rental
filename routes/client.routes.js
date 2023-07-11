const Router = require("koa-router");

const router = new Router();

const {
  add,
  get,
  getOne,
} = require("../controllers/client.controller");

router.post("/add", add);

router.get("/get", get);

router.get("/getOne/:id", getOne);

module.exports = () => router.routes();
