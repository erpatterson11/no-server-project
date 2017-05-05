angular.module('weatherApp').directive('dailyWeather', function() {

  return {
    restrict: 'E',
    templateUrl: './app/directives/dailyWeather/dailyWeathTempl.html',
    scope: {
      cloudCover: '@',
      precip: '@',
      icon: '@',
      temp: '@',
      wind: '@'
    }
  }





}); //-------------------------------------------------------------------------
