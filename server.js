import Koa from 'koa'
import jwt from 'jsonwebtoken'
import convert from 'koa-convert'
import serve from 'koa-static'
import rewrite from 'koa-rewrite'
import mongo from 'koa-mongo'
import router from './router'

var app = new Koa()

if(process.env.NODE_ENV=="debug"){
	var logger = require('koa-logger')
	var webpack = require('webpack')
	var config = require('./webpack.config')
	var compiler = webpack(config)
	app.use(convert(logger()))
	app.use(convert(require("koa-webpack-dev-middleware")(compiler, {noInfo: true, publicPath: config.output.publicPath})))
	app.use(convert(require("koa-webpack-hot-middleware")(compiler)))
}
// app.use(mongo({host:process.env.host||'localhost',port:process.env.port||27017,db:"main"}))

app.use(router.routes())
app.use(router.allowedMethods())
app.use(convert(rewrite('/*.html','/index.html')))
app.use(convert(serve("public")))
app.listen(80)
