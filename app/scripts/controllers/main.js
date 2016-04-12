'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngApp
 */
angular.module('ngApp')
  .controller('MainCtrl', function ($scope) {
    $scope.summoners = [{'name':'Trillking James', 'lane':'top', 'elo':'bronze'},
    {'name':'Jnel', 'lane':'sup', 'elo':'bronze'},
    {'name':'Chili', 'lane':'bot', 'elo':'bronze'},
    {'name':'Bardcena', 'lane':'jg', 'elo':'bronze'},
    {'name':'Sandelwoodgrips', 'lane':'mid', 'elo':'bronze'}];
    $scope.addSummoner = function(){
    	$scope.summoners.push($scope.summoner);
    	$scope.summoner = '';
    }
  })
  .directive('profile', function(){
  	return {
  		 templateUrl: 'views/summoner-profile.html'
  	};
  });