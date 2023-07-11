const Router = require("koa-router");

const clientRouter = require("./client.routes");

const router = new Router();

router.use("/client", clientRouter()); //["/api/client", "/api/user"],

module.exports = () => router.routes();
