(function () {

  angular
    .module("ResourcesLab")
    .factory("UserResource", UserResource)

  UserResource.$inject = ["$resource"]

  function UserResource($resource) {
    return $resource(
      "http://localhost:3000/api/users/:id",
      {id: "@id"},
      {update: {method: "PUT"}}
    )
  }

})()
