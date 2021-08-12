var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var app = express()
// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require('fs')
const dataBuffer = fs.readFileSync('./data/user.json')
const dataJSON = dataBuffer.toString()
console.log('>>> : dataJSON', dataJSON)
const data = JSON.parse(dataJSON) // read json file and change json object
console.log('>>> : data', data)

var indexRouter = require('./routes/index') // main route file
// var indexRouter = require('./routes/index')(app, fs) // use json data file
var usersRouter = require('./routes/users')
var postsRouter = require('./routes/posts')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public'))) // pbulic folder

// allow cross domain
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/posts', postsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
