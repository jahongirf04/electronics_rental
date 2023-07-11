const Koa = require("koa");
const config = require("config");

const app = new Koa();

const PORT = config.get("port") || 3000;

const bodyParser = require("koa-bodyparser");

const serve = require("koa-static");

const sequelize = require("./config/db")

const mainRouter = require("./routes/index.routes");

const cors = require("@koa/cors");
const Client = require("./models/client");

app.use(serve("."));

app.use(bodyParser());

app.use(cors());

app.use(mainRouter());



const start = async () => {
    try{
      await sequelize.authenticate();
      await sequelize.sync({alter: true});
      console.log("Connection has been established successfully.");

    app.listen(PORT, () => {
      console.log(`Server ${PORT} - portda ishga tushdi`);
    });
    
  } catch (e) {
    console.log(e.message);
  }
}
start();
