define(['app'], function (app) {
    app.controller('createSpaceController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {

        Data.User.getAll().then(function (result) {
            $scope.Users = result;
            $scope.$$phase || $scope.$apply();
        });


        $scope.saveChanges = saveChanges;

        function saveChanges() {

            var dataSet = {};

            dataSet.title = $scope.title;
            dataSet.description = $scope.description;
            dataSet.welcome = $scope.welcome ? $scope.welcome : false;
            dataSet.private = $scope.private ? $scope.private : false;
            dataSet.featured = $scope.featured ? $scope.featured : false;
            dataSet.created_by = $rootScope.adminUserId;
            dataSet.members = $scope.selectedUsers;

            Data.Space.create(dataSet).then(function (result) {
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