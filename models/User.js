var mongoose = require("mongoose")

var UserSchema = mongoose.Schema({
  name: String,
  username: { type: String, index: { unique: true }},
  address: String
})

module.exports = mongoose.model("User", UserSchema)
