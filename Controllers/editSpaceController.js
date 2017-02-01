define(['app'], function (app) {
    app.controller('editSpaceController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {

        function getUsers() {
            Data.User.getAll().then(function (result) {
                $scope.Users = result;

                $scope.$$phase || $scope.$apply();
            });
        }

        function init() {
            getUsers();
            getDetails();
        }

        init();

        function getDetails() {
            Data.Space.getById($rootScope.editId).then(function (result) {
                $scope.title = result.title;
                $scope.description = result.description;
                $scope.welcome = result.welcome ? result.welcome : false;
                $scope.private = result.private ? result.private : false;
                $scope.featured = result.featured ? result.featured : false;
                $scope.selectedUsers = result.members;
                $scope.$$phase || $scope.$apply();
            });
        }

        $scope.saveChanges = saveChanges;

        function saveChanges() {

            var dataSet = {};

            dataSet.id = $rootScope.editId;
            dataSet.title = $scope.title;
            dataSet.description = $scope.description;
            dataSet.welcome = $scope.welcome ? $scope.welcome : false;
            dataSet.private = $scope.private ? $scope.private : false;
            dataSet.featured = $scope.featured ? $scope.featured : false;
            dataSet.members = $scope.selectedUsers;

            Data.Space.updateById($rootScope.editId, dataSet).then(function (result) {
                $location.path('#/home');
                $scope.$$phase || $scope.$apply();
            });


        }

        $scope.cancel = cancel;

        function cancel() {
            $location.path('#/home');
        }


    }]);
});