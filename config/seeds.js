var mongoose = require("./database")

var User = require("../models/User")

var users = [
  {
    name: "AJ",
    username: "ajalmaguer",
    address: "123 Street St"
  },
  {
    name: "Johnson",
    username: "jco11",
    address: "123 Street St"
  }
]

User.remove({}, function (err){
  if (err) console.log(err)
  User.create(users, function (err, users) {
    if (err) {
      console.log(err)
    } else {
      console.log(`Database seeded with ${users.length} users`)
      process.exit()
    }
  })
})


