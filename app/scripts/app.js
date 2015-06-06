'use strict';

/**
 * @ngdoc overview
 * @name faqAppApp
 * @description
 * # faqAppApp
 *
 * Main module of the application.
 */
angular
  .module('faqAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
