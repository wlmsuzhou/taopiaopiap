import Koa from 'koa';
import http from 'http';
import convert from 'koa-convert';
import logger from 'koa-logger';
import cors from 'koa-cors';//跨域
import bodyParser from 'koa-bodyparser'
import onerror from 'koa-onerror';
import resource from 'koa-static'

import path from 'path'

import routes from './routes'

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

// routes
app.use(routes.routes(), routes.allowedMethods());

app.on('error', (error, ctx) => {
    console.log('错误:' + JSON.stringify(ctx.onerror))
    console.log('server error' + error)
})

http.createServer(app.callback()).listen(3000).on('listening', function () {
    console.log('正在监听端口' + 3000);
})