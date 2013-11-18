var agent = require('superagent')
var request = require('request')

var server = "http://localhost:3000"
var token = "GPC2iVQnaifo04HnlDjeN_aKdbA=V35n9jfmd5a75876182348a3adf7107bc980ecf6be6fe68379655e1a0ae03295ed37564c8bc0817b7196b01574cc193a1ea08d0da2c1f18c4c8b4e2bb9c27624d11f8ba0"
var tokenAsCommitte = "u6T-Tc81vE0qi6NUma81pDu8lIo=v4kG3Is_841acb056bc1cba6925cbd58fc2c06522d0ee1e468b15868df2558906073fd9b8cdfbc8c4c726999ea027bfef68259ceda8bf79da49d59040e65022bc3159c83"
var biddingId = '7ca1cf71-bc42-4525-8a1d-a6f3e144658c'
agent.get(server + '/users/1?access_token=' + token).end(function(err, res){
  console.log(res.body)
})

var biddingId = '7ca1cf71-bc42-4525-8a1d-a6f3e144658c'
agent.get(server + '/biddings/' + biddingId + '?access_token=' + token).end(function(err, res){
  console.log(res.body)
})

agent.get(server + '/biddings/' + biddingId + '/participants' + '?access_token=' + token).end(function(err, res){
  console.log(res.body)
})

request.post({
  url : server + '/biddings/' + biddingId + '/confirm?access_token=' + token,
  headers : {
    "Content-type" : "application/json"
  },
  body : "{}"
}, function(a, b, c ){
  console.log(a)
  console.log(c)
})

request.post({
  url : server + '/users/token',
  headers : {
    "Content-type" : "application/json"
  },
  body : '{ "username" : "joni", "password" : "12345"}'
}, function(a, b, c ){
  console.log(a)
  console.log(c)
})