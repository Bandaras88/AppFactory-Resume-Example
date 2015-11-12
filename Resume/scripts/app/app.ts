/// <reference path="../resume.ts" />
interface indexScope extends angular.IScope {
    resume: resume;
}

(function () {
    "use strict";
    var app = angular.module("app", []);

    app.controller("indexController", ["$scope", function ($scope: indexScope) {
        $scope.resume = new resume();
    }]);
})();
