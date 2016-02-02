'use strict';

/**
 * @ngdoc overview
 * @name dctMacApp
 * @description
 * # dctMacApp
 *
 * Main module of the application.
 */
angular
  .module('dctMacApp', [
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
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  // angular
  // .module('dctMacApp', [
  //   'ngAnimate',
  //   'ngCookies',
  //   'ngResource',
  //   'ngRoute',
  //   'ngSanitize',
  //   'ngTouch'
  // ])
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });

