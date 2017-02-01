define(['angularAMD', 'angular-route', 'data'], function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/home", angularAMD.route({
                templateUrl: 'Views/dashboard.html',
                controller: 'dashboardController',
                controllerUrl: 'Controllers/dashboardController.js'
            }))
            .when("/createSpace", angularAMD.route({
                templateUrl: 'Views/createSpace.html',
                controller: 'createSpaceController',
                controllerUrl: 'Controllers/createSpaceController.js'
            }))
             .when("/editSpace", angularAMD.route({
                 templateUrl: 'Views/editSpace.html',
                 controller: 'editSpaceController',
                 controllerUrl: 'Controllers/editSpaceController.js'
             }))
            .otherwise({ redirectTo: "/home" });
    });

    return angularAMD.bootstrap(app);
});