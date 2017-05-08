angular.module('weatherApp').service('mainService', function($http) {

      this.getWeatherData = function(latitude,longitude) {
    return $http.get('https://api.darksky.net/forecast/51ad5a6fd44830ae0a78d025de05e749/' + latitude + ',' + longitude)
  }

});
