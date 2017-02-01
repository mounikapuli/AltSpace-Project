define(['app'], function (app) {
    app.controller('dashboardController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {

        $scope.Space = {};

        $scope.title = "Dashboard";

        function init() {
            Data.Space.getAll().then(function (result) {
                $scope.Space = result;
                $scope.$$phase || $scope.$apply();
            });

            Data.User.getAll().then(function (result) {
                $scope.Users = result;

                $scope.Users.forEach(function (user) {
                    if (user.admin) {
                        $rootScope.adminUserId = user.id
                    }
                });

            });
        }

        init();

        $scope.createSpace = function () {
            $location.path('/createSpace');
        };

        $scope.editSpace = function (id) {
            $rootScope.editId = id;
            $location.path('/editSpace');
        };

        $scope.deleteSpace = function (id) {
            Data.Space.deleteById(id).then(function (result) {
                init();
            });
        };
    }]);
});