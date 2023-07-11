const myModel = require("../models/client")

const get = async (ctx) =>{
    try{
    const obj = await myModel.findAll()
    ctx.status = 200;
    ctx.body = obj;
    } catch(e){
        console.log(e.message);
    }
}

const getOne = (ctx) => {}

const add = async (ctx) => {
    try{
        const {name, phone_number} = ctx.request.body
        const neww = await myModel.create({name, phone_number});
        ctx.status = 200
        ctx.body = neww
    } catch (e){
        ctx.status = 500;
        ctx.body = e.message;
    }
}

module.exports = {
    get,
    getOne,
    add
}