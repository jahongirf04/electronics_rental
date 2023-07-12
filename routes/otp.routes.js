const Router = require("koa-router");

const router = new Router();

const {
  add,
  get,
  getOne,
  update,
  deleteOne,
} = require("../controllers/otp.controller");

router.post("/add", add);

router.get("/get", get);

router.get("/getOne/:id", getOne);

router.put("/update/:id", update);

router.delete("/delete/:id", deleteOne);

module.exports = () => router.routes();
