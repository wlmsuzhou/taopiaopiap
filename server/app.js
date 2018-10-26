
const Koa = require('koa');
const http = require('http');
const convert = require('koa-convert');
const logger = require('koa-logger');
const cors = require('koa-cors');//跨域
const bodyParser  = require('koa-bodyparser') 
const onerror = require('koa-onerror');
// const Router = require('koa-router');
const dealfn = require('./routes/dealfn');
// const router = new Router();
const router = require('./routes')

const app = new Koa();

onerror(app);

app.use(convert(cors()));

app.use(convert(logger()))

app.use(bodyParser())

app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})



app.on('error', (error, ctx) => {
    console.log('错误:' + JSON.stringify(ctx.onerror))
    console.log('server error' + error)
})
// routes
app.use(router.routes()).use(router.allowedMethods());

http.createServer(app.callback()).listen(3000).on('listening', function () {
    console.log('正在监听端口' + 3000);
    //console.log(router);
})

module.exports = app;