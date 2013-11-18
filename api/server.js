var express = require('express')
var serializer = require('serializer')
var consolidate = require('consolidate')
var spawn = require('child_process').spawn
var request = require('request')

var keys = ['hello', 'world'] 
var server = express()
server.disable('x-powered-by')
server.use(express.bodyParser())
server.engine('html', consolidate.hogan)
server.set('view engine', 'html')
server.set('views', __dirname + '/views')

server.use(express.static(__dirname + '/public'))

var user = require('./user')
var bidding = require('./bidding')

var publicPaths = ['/', '/users/token', '/bid', '/upload'/*'/forms'*/]

// check token
server.use(function(req, res, next){
  
  // asking for token, skip
  if(publicPaths.indexOf(req.path) > -1){
    next()
  }else{
    if(req.query.access_token || req.headers.authorization) {

      if(req.query.access_token){
        req.token = req.query.access_token
        return next()
      }

      if(req.headers.authorization){
        var temp = req.headers.authorization
        var tempArr = temp.split(" ")
        if(tempArr.length == 2){
          req.token = tempArr[1]
          return next()
        }else{

          res.send(400, {
            meta : 400,
            error_type : "AuthException",
            error_messages : "Access token is required"
          })

        }
      }
    }
    else {

      if(req.headers['user-agent'].indexOf('APENDO') > -1){

        return res.send(400, {
          meta : 400,
          error_type : "AuthException",
          error_messages : "Access token is required"
        })
      }else{
        res.render("404", {})
      }
    }
  }
})

server.use(function(req, res, next){

  if(req.token){

    try{
      var temp = serializer.secureParse(req.token, keys[0], keys[1])

      if(typeof temp == 'object'){
        req.user = temp
      }

      next()
    }
    catch(e){

      res.send(400, {
        meta : 400,
        error_type : "AuthException",
        error_messages : "Invalid access token"
      })

    }
  }else{

    next()

  }
})

// biddings
server.get('/biddings/:id/:opt?', function(req, res){

  var id = req.params.id

  var skip = req.query.skip || 0
  var count = req.query.count || 0

  var opt = req.params.opt ? {skip : skip, count: count} : null


  bidding.get(id, req.user.role, opt, function(err, bid){
    if(err){
      return res.send({
        meta : {
          code : 400,
          error_type: "InvalidParameters",
          error_messages : err.message
        }
      })
    }else{

      console.log(bid)

      res.send({
        meta : { code : 200},
        data : bid
      })
    }
  })
})

server.post('/biddings/:id/confirm', function(req, res){
  res.send({
    meta : {code : 200},
    data : {
      id: req.params.id,
      confirmed : true,
      remark : "Semoga sukses!"
    }
  })
})

// forms
server.get('/forms', function(req, res){
  res.render('form',{
    title : req.query.id,
    key : req.query.key
  })
})

// users
server.post('/users/token', function(req, res){

  var obj = req.body

  if(!obj) {
    return res.send(400, {
      meta : {
        code: 400,
        error_type: "InvalidParameters",
        error_messages : "Invalid parameters"
      }
    })
  }
  else{
    user.get(obj.username, obj.password, function(err, currentUser){
      if(err){
        res.send(400, {
          meta : {
            code : 400,
            error_type: "InvalidParameters",
            error_messages : err.message
          }
        })
      }else{
        var token = { id: currentUser.id, role : currentUser.role, timestamp : new Date().valueOf()}
        var serialized = serializer.secureStringify(token, keys[0], keys[1])

        res.send({
          meta : {
            code : 200
          }, 
          data : {
            username : obj.username,
            access_token : serialized
          }
        })
      }
    })
  }
})

server.get('/users/:id', function(req, res){

  var id = req.params.id
  if(req.params.id == 'me'){
    id = req.user.id
  }
  
  user.getById(id, function(err, currentUser){

    if(err) return res.send(400, { meta : {
      code : 400, 
      error_type : "InvalidParameters",
      error_messages : err.message
    }})

    res.send({
      meta : { code : 200},
      data : currentUser
    })
  })

})

server.get('/bid', function(req, res){
  var id = req.query.key
  var title = req.query.title
  res.render('bid', {title : title, link : '/biddings/' + id})
})

server.get('/', function(req, res){
  var keys = ['8a1d-a6f3e144658c-7ca1cf71-bc42-4525', '8a1d-a6f3e144658c-7ca1cf71-bc42-4526']

  res.render('index', {
    biddings : [
      { id: keys[0], idx : 1, title : 'Bidding 1', desc: 'Bidding 1 is delicious'},
      { id: keys[1], idx : 2, title : 'Bidding 2', desc: 'Bidding 2 is charming'}
    ]
  })
})

server.listen(3001)
console.log('Burn it out! 3001')

/*
var tusd = spawn(__dirname + '/tusd.sh')
console.log('tusd pid: ' + tusd.pid)
*/

