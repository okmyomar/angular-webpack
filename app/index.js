const angular = require('angular');
const angularRoute = require('angular-route');

const bears = require('./components/bears');

var bearsApp = angular.module('sampleApp', [require('angular-route')]);

bearsApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: function() {}
      }).

      when('/bears', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).

      when('/bears/:bearId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).

      otherwise({
        redirectTo: '/bears'
      });

     // Ise history url if supported
    if (window.history && window.history.pushState) {
      $locationProvider.html5Mode(true);
    }

  }]);


/* App Module

var phonecatApp = angular.module('phonecatApp', [require('angular-route')]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

*/
