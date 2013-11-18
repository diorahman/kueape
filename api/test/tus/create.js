var request = require('request')
var option = {
  url : "http://localhost:8080/files",
  followRedirect : false,
  headers : {
    "Content-Length" : 0,
    "Final-Length" : 100
  },
  method: 'POST'
}

request(option, function(a, b, c){
  console.log(a)
  console.log(b.headers)
  console.log(c)
})


