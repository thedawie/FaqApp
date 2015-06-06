'use strict';

/**
 * @ngdoc function
 * @name faqAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the faqAppApp
 */
angular.module('faqAppApp')
  .controller('FaqCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
