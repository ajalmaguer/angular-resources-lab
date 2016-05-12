(function () {

  angular
    .module("ResourcesLab")
    .controller("UsersController", UsersController)

  UsersController.$inject = ["UserResource"]

  function UsersController() {
    var vm = this

    vm.all = []

    vm.removeUser = removeUser

    vm.all = [
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

    function removeUser(user) {
      console.log(user)
    }


  }


})()
