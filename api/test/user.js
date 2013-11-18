var user = require('../user')
user.get('diorahman', '12345', function(err, currentUser){
  console.log(err)
  console.log(currentUser)
})

user.get('diorahman', '1234', function(err, currentUser){
  console.log(err)
  console.log(currentUser)
})

user.get('diorahma', '1234', function(err, currentUser){
  console.log(err)
  console.log(currentUser)
})

user.getById(1, function(err, currentUser){
  console.log(err)
  console.log(currentUser)
})

user.getById(10, function(err, currentUser){
  console.log(err)
  console.log(currentUser)
})