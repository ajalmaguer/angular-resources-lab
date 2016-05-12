var User = require("../models/User")

module.exports = {
  getAll: getAll,
  createUser: createUser,
  updateUser: updateUser,
  removeUser: removeUser
}

// GET
function getAll (req, res) {
  console.log("Getting all users")
  User.find({}, function (err, users) {
    if (err) {
      message = "Could not find any users: " + err
      console.log(message)
      res.json({message: message})
      return false
    }

    res.json({users: users})
  })
}

// POST
function createUser (req, res) {
  console.log("Creating user")
  // console.log(req.body)

  var user = new User(req.body)

  user.save(function (err, savedUser) {
    if (err) {
      message = "Could not create user b/c: " + err
      console.log(message)
      res.json({message: message})
      return false
    }

    res.json({user: savedUser})
  })
}

// UPDATE
function updateUser(req, res) {
  console.log("Updaing user" + id)
  var id = req.params.id

  User.findById({_id: id}, function (err, user) {
    if (err) {
      message = "Could not find user b/c: " + err
      console.log(message)
      res.json({message: message})
      return false
    }

    if (req.body.name) user.name = req.body.name
    if (req.body.username) user.username = req.body.username
    if (req.body.address) user.address = req.body.address

    user.save(function (err, savedUser) {
      if (err) {
        message = "Could not save updated user b/c: " + err
        console.log(message)
        res.json({message: message})
        return false
      }

      res.json({message: "User updated", user: savedUser})
    })


  })


}

// DELETE
function removeUser (req, res) {
  console.log("Removing User")

  var id = req.params.id

  User.remove({_id: id}, function (err) {
    if (err) {
      message = "Could not delete user b/c: " + err
      console.log(message)
      res.json({message: message})
      return false
    }

    res.json({message: "User successfully deleted"})
  })
}















