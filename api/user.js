var users = []

var user1 = {
  id: 1,
  username : "diorahman",
  password : "12345",
  role : "PARTICIPANT",
  name : "Dhi Aurrahman",
  profile : {
    company : "RockyBars.com",
    url: "http://rockybars.com"
  }
}

var user2 = {
  id: 2,
  username : "budi",
  password : "12345",
  role : "PARTICIPANT",
  name : "Budi Sudjatmiko",
  profile : {
    company : "Budi Bahagia",
    url: "http://budibahagia.com"
  }
}

var user3 = {
  id: 3,
  username : "wati",
  password : "12345",
  role : "PARTICIPANT",
  name : "Wati Sukotjo",
  profile : {
    company : "Wati Sukses",
    url: "http://watisukses.com"
  }
}

var user4 = {
  id: 4,
  username : "joni",
  password : "12345",
  role : "COMMITTEE",
  name : "Joni Iskandar",
  profile : {
    company : "Dinas Kesehatan Bandung",
    url: "http://dinkes.bandung.go.id"
  }
}

users.push(user1)
users.push(user2)
users.push(user3)
users.push(user4)

var db = {
  users : {}
}

for(var i = 0; i < users.length; i++){
  db.users[users[i].username] = users[i]
}

function get(user, password, cb){
  var u = db.users[user]
  if(!u) return cb(new Error("User not found"))
  else{
    if(u.password != password) return cb(new Error("Wrong Password"))
    cb(null, db.users[user])
  }
}

function getById(id, cb){
  for(var i = 0; i < users.length; i++){
    console.log(users[i].id, id)
    if(users[i].id == id){

      return cb(null, {
        id: users[i].id,
        username : users[i].username,
        name : users[i].name,
        profile : users[i].profile,
        role : users[i].role
      })

    } 
  }

  cb(new Error("User not found"))
}

module.exports = {
  get : get,
  getById : getById
}