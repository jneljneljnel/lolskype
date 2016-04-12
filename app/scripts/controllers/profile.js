'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngApp
 */
angular.module('ngApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.people =[{'name':'jnel'}];
  });
