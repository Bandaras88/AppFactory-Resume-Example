/// <reference path="../resume.ts" />
interface indexScope extends angular.IScope {
    resume: resume;
}

(function () {
    "use strict";
    var app = angular.module("app", []);

    app.controller("indexController", ["$scope", function ($scope) {
        $scope.resume = new resume();
        $scope.contactDetails = false;
        $scope.skills = false;
        $scope.studies = false;
        $scope.workHistory = false;
        $scope.references = false;
        $scope.fullView = false;
        $scope.btnContact = true;
        $scope.btnStudies = true;
        $scope.btnSkills = true;
        $scope.btnWork = true;
        $scope.btnRef = true;
        $scope.btnFull = true;

        $scope.showContactDetails = function () {
            $scope.contactDetails = true;
            $scope.skills = false;
            $scope.studies = false;
            $scope.workHistory = false;
            $scope.references = false;
            $scope.fullView = false;
        };
        $scope.showSkills = function () {
            $scope.skills = true;
            $scope.contactDetails = false;
            $scope.studies = false;
            $scope.workHistory = false;
            $scope.references = false;
            $scope.fullView = false;
        };
        $scope.showStudies = function () {
            $scope.studies = true;
            $scope.contactDetails = false;
            $scope.skills = false;
            $scope.workHistory = false;
            $scope.references = false;
            $scope.fullView = false;
        };
        $scope.showWorkHistory = function () {
            $scope.workHistory = true;
            $scope.contactDetails = false;
            $scope.skills = false;
            $scope.studies = false;
            $scope.references = false;
            $scope.fullView = false;
        };
        $scope.showReferences = function () {
            $scope.references = true;
            $scope.contactDetails = false;
            $scope.skills = false;
            $scope.studies = false;
            $scope.workHistory = false;
            $scope.fullView = false;
        };
        $scope.showFullCV = function () {
            $scope.fullView = true;
            $scope.contactDetails = false;
            $scope.skills = false;
            $scope.studies = false;
            $scope.references = false;
            $scope.btnContact = false;
            $scope.btnStudies = false;
            $scope.btnSkills = false;
            $scope.btnWork = false;
            $scope.btnRef = false;
            $scope.btnFull = false;
            $scope.references = false;
        };
        $scope.back = function () {
            $scope.fullView = false;
            $scope.contactDetails = false;
            $scope.skills = false;
            $scope.studies = false;
            $scope.references = false;
            $scope.btnContact = true;
            $scope.btnStudies = true;
            $scope.btnSkills = true;
            $scope.btnWork = true;
            $scope.btnRef = true;
            $scope.btnFull = true;
        };
    }]);
})();