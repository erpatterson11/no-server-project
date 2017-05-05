angular.module('weatherApp').directive('currentWeather', function() {

    return {
      restrict: 'E',
      templateUrl: './app/directives/currentWeather/curWeathTempl.html',
      scope: {
        cloudCover: '@',
        icon: '@',
        precipProb: '@',
        precipIntensity: '@',
        precipType: '@',
        temp: '@',
        wind: '@'
      },
      controller: function($scope, weatherData) {
        $scope.getCurrWeath = weatherData.allData.data.currently;
      },
    }



}); //-------------------------------------------------------------------------
