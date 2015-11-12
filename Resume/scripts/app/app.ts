/// <reference path="../resume.ts" />
interface indexScope extends angular.IScope {
    resume: resume;
}

module resumeApp {
    var app = angular.module("app");

    app.controller("indexController", function () {
        var $scope: indexScope;
        $scope.resume = new resume();
    });
}