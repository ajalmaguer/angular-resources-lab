var express = require("express")
var router = express.Router()
var bodyParser = require("body-parser")

var usersController = require("../controllers/users")

router
  .route("/api/users")
    .get(usersController.getAll)
    .post(usersController.createUser)

router
  .route("/api/users/:id")
    .put(usersController.updateUser)
    .delete(usersController.removeUser)

module.exports = router
