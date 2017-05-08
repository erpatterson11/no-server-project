'use strict';

angular.module('weatherApp', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    template: "<h1>Now it works!</h1>"
  });
}]); //-------------------------------------------------------------------------
'use strict';

angular.module('weatherApp').service('mainService', ["$http", function ($http) {

      this.getWeatherData = function (latitude, longitude) {
            return $http.get('https://api.darksky.net/forecast/51ad5a6fd44830ae0a78d025de05e749/' + latitude + ',' + longitude);
      };
}]);
'use strict';

angular.module('weatherApp').service('weatherData', function () {

    this.allData = {
        "data": {
            "latitude": 37.8267,
            "longitude": -122.4233,
            "timezone": "America/Los_Angeles",
            "offset": -7,
            "currently": {
                "time": 1493850269,
                "summary": "Clear",
                "icon": "clear-day",
                "nearestStormDistance": 1,
                "nearestStormBearing": 148,
                "precipIntensity": 0,
                "precipProbability": 0,
                "temperature": 72.51,
                "apparentTemperature": 72.51,
                "dewPoint": 53.46,
                "humidity": 0.51,
                "windSpeed": 7.72,
                "windBearing": 269,
                "visibility": 9.2,
                "cloudCover": 0.11,
                "pressure": 1012.92,
                "ozone": 312.45
            },
            "minutely": {
                "summary": "Clear for the hour.",
                "icon": "clear-day",
                "data": [{
                    "time": 1493850240,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850300,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850360,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850420,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850480,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850540,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850600,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850660,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850720,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850780,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850840,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850900,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493850960,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851020,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851080,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851140,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851200,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851260,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851320,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851380,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851440,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851500,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851560,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851620,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851680,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851740,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851800,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851860,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851920,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493851980,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852040,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852100,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852160,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852220,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852280,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852340,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852400,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852460,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852520,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852580,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852640,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852700,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852760,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852820,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852880,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493852940,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853000,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853060,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853120,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853180,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853240,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853300,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853360,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853420,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853480,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853540,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853600,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853660,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853720,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853780,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }, {
                    "time": 1493853840,
                    "precipIntensity": 0,
                    "precipProbability": 0
                }]
            },
            "hourly": {
                "summary": "Partly cloudy starting tonight.",
                "icon": "partly-cloudy-day",
                "data": [{
                    "time": 1493848800,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 72.51,
                    "apparentTemperature": 72.51,
                    "dewPoint": 53.06,
                    "humidity": 0.5,
                    "windSpeed": 7.33,
                    "windBearing": 268,
                    "visibility": 9.25,
                    "cloudCover": 0.08,
                    "pressure": 1012.96,
                    "ozone": 311.94
                }, {
                    "time": 1493852400,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 77.87,
                    "apparentTemperature": 77.87,
                    "dewPoint": 58.96,
                    "humidity": 0.52,
                    "windSpeed": 8.3,
                    "windBearing": 271,
                    "visibility": 9.13,
                    "cloudCover": 0.15,
                    "pressure": 1012.85,
                    "ozone": 313.18
                }, {
                    "time": 1493856000,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 77.33,
                    "apparentTemperature": 77.33,
                    "dewPoint": 60.14,
                    "humidity": 0.55,
                    "windSpeed": 8.97,
                    "windBearing": 277,
                    "visibility": 8.98,
                    "cloudCover": 0.15,
                    "pressure": 1012.71,
                    "ozone": 314.31
                }, {
                    "time": 1493859600,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 75.19,
                    "apparentTemperature": 75.19,
                    "dewPoint": 60.57,
                    "humidity": 0.6,
                    "windSpeed": 8.75,
                    "windBearing": 281,
                    "visibility": 8.92,
                    "cloudCover": 0.16,
                    "pressure": 1012.53,
                    "ozone": 315.28
                }, {
                    "time": 1493863200,
                    "summary": "Clear",
                    "icon": "clear-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 71.85,
                    "apparentTemperature": 71.85,
                    "dewPoint": 59.93,
                    "humidity": 0.66,
                    "windSpeed": 7.8,
                    "windBearing": 283,
                    "visibility": 8.67,
                    "cloudCover": 0.16,
                    "pressure": 1012.39,
                    "ozone": 316.12
                }, {
                    "time": 1493866800,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 67.25,
                    "apparentTemperature": 67.25,
                    "dewPoint": 58.12,
                    "humidity": 0.73,
                    "windSpeed": 6.67,
                    "windBearing": 282,
                    "visibility": 8.06,
                    "cloudCover": 0.16,
                    "pressure": 1012.37,
                    "ozone": 316.89
                }, {
                    "time": 1493870400,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 64.21,
                    "apparentTemperature": 64.21,
                    "dewPoint": 57.15,
                    "humidity": 0.78,
                    "windSpeed": 5.55,
                    "windBearing": 280,
                    "visibility": 7.37,
                    "cloudCover": 0.18,
                    "pressure": 1012.57,
                    "ozone": 317.61
                }, {
                    "time": 1493874000,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 62.43,
                    "apparentTemperature": 62.43,
                    "dewPoint": 56.69,
                    "humidity": 0.82,
                    "windSpeed": 5.2,
                    "windBearing": 272,
                    "visibility": 6.71,
                    "cloudCover": 0.2,
                    "pressure": 1012.99,
                    "ozone": 318.26
                }, {
                    "time": 1493877600,
                    "summary": "Clear",
                    "icon": "clear-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 60.95,
                    "apparentTemperature": 60.95,
                    "dewPoint": 56.13,
                    "humidity": 0.84,
                    "windSpeed": 5.06,
                    "windBearing": 267,
                    "visibility": 6.3,
                    "cloudCover": 0.22,
                    "pressure": 1013.26,
                    "ozone": 318.77
                }, {
                    "time": 1493881200,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 59.58,
                    "apparentTemperature": 59.58,
                    "dewPoint": 55.51,
                    "humidity": 0.86,
                    "windSpeed": 5.08,
                    "windBearing": 265,
                    "visibility": 5.99,
                    "cloudCover": 0.27,
                    "pressure": 1013.22,
                    "ozone": 319.22
                }, {
                    "time": 1493884800,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 58.52,
                    "apparentTemperature": 58.52,
                    "dewPoint": 54.77,
                    "humidity": 0.87,
                    "windSpeed": 5.06,
                    "windBearing": 262,
                    "visibility": 5.69,
                    "cloudCover": 0.27,
                    "pressure": 1013.03,
                    "ozone": 319.52
                }, {
                    "time": 1493888400,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 57.59,
                    "apparentTemperature": 57.59,
                    "dewPoint": 54.5,
                    "humidity": 0.89,
                    "windSpeed": 5.02,
                    "windBearing": 260,
                    "visibility": 5.1,
                    "cloudCover": 0.37,
                    "pressure": 1012.86,
                    "ozone": 319.38
                }, {
                    "time": 1493892000,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 56.84,
                    "apparentTemperature": 56.84,
                    "dewPoint": 53.96,
                    "humidity": 0.9,
                    "windSpeed": 4.91,
                    "windBearing": 258,
                    "visibility": 4.87,
                    "cloudCover": 0.45,
                    "pressure": 1012.73,
                    "ozone": 318.38
                }, {
                    "time": 1493895600,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 56.28,
                    "apparentTemperature": 56.28,
                    "dewPoint": 53.67,
                    "humidity": 0.91,
                    "windSpeed": 4.73,
                    "windBearing": 256,
                    "visibility": 4.55,
                    "cloudCover": 0.48,
                    "pressure": 1012.61,
                    "ozone": 316.93
                }, {
                    "time": 1493899200,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 56.25,
                    "apparentTemperature": 56.25,
                    "dewPoint": 53.83,
                    "humidity": 0.92,
                    "windSpeed": 4.48,
                    "windBearing": 254,
                    "visibility": 4.44,
                    "cloudCover": 0.57,
                    "pressure": 1012.58,
                    "ozone": 315.96
                }, {
                    "time": 1493902800,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 56.55,
                    "apparentTemperature": 56.55,
                    "dewPoint": 54.16,
                    "humidity": 0.92,
                    "windSpeed": 4.45,
                    "windBearing": 253,
                    "visibility": 4.48,
                    "cloudCover": 0.66,
                    "pressure": 1012.69,
                    "ozone": 315.87
                }, {
                    "time": 1493906400,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 57.72,
                    "apparentTemperature": 57.72,
                    "dewPoint": 55.02,
                    "humidity": 0.91,
                    "windSpeed": 4.3,
                    "windBearing": 251,
                    "visibility": 4.63,
                    "cloudCover": 0.83,
                    "pressure": 1012.87,
                    "ozone": 316.26
                }, {
                    "time": 1493910000,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 61.1,
                    "apparentTemperature": 61.1,
                    "dewPoint": 56.92,
                    "humidity": 0.86,
                    "windSpeed": 4.47,
                    "windBearing": 250,
                    "visibility": 5.53,
                    "cloudCover": 0.83,
                    "pressure": 1013.02,
                    "ozone": 316.96
                }, {
                    "time": 1493913600,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 63.28,
                    "apparentTemperature": 63.28,
                    "dewPoint": 58.12,
                    "humidity": 0.83,
                    "windSpeed": 4.66,
                    "windBearing": 246,
                    "visibility": 5.95,
                    "cloudCover": 0.8,
                    "pressure": 1013.11,
                    "ozone": 318.34
                }, {
                    "time": 1493917200,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 66.27,
                    "apparentTemperature": 66.27,
                    "dewPoint": 59.64,
                    "humidity": 0.79,
                    "windSpeed": 5.07,
                    "windBearing": 248,
                    "visibility": 6.83,
                    "cloudCover": 0.7,
                    "pressure": 1013.16,
                    "ozone": 320.02
                }, {
                    "time": 1493920800,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 68.68,
                    "apparentTemperature": 68.68,
                    "dewPoint": 60.4,
                    "humidity": 0.75,
                    "windSpeed": 5.8,
                    "windBearing": 250,
                    "visibility": 7.78,
                    "cloudCover": 0.58,
                    "pressure": 1013.16,
                    "ozone": 320.62
                }, {
                    "time": 1493924400,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 69.98,
                    "apparentTemperature": 69.98,
                    "dewPoint": 60.29,
                    "humidity": 0.71,
                    "windSpeed": 6.93,
                    "windBearing": 250,
                    "visibility": 8.23,
                    "cloudCover": 0.56,
                    "pressure": 1013.13,
                    "ozone": 319.33
                }, {
                    "time": 1493928000,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 71.64,
                    "apparentTemperature": 71.64,
                    "dewPoint": 60.68,
                    "humidity": 0.68,
                    "windSpeed": 8.36,
                    "windBearing": 249,
                    "visibility": 8.49,
                    "cloudCover": 0.56,
                    "pressure": 1013.05,
                    "ozone": 316.95
                }, {
                    "time": 1493931600,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 71.82,
                    "apparentTemperature": 71.82,
                    "dewPoint": 60.57,
                    "humidity": 0.68,
                    "windSpeed": 9.31,
                    "windBearing": 250,
                    "visibility": 8.49,
                    "cloudCover": 0.64,
                    "pressure": 1012.89,
                    "ozone": 314.63
                }, {
                    "time": 1493935200,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 67.59,
                    "apparentTemperature": 67.59,
                    "dewPoint": 57.82,
                    "humidity": 0.71,
                    "windSpeed": 9.74,
                    "windBearing": 252,
                    "visibility": 8.83,
                    "cloudCover": 0.56,
                    "pressure": 1012.57,
                    "ozone": 312.57
                }, {
                    "time": 1493938800,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 65.96,
                    "apparentTemperature": 65.96,
                    "dewPoint": 57.21,
                    "humidity": 0.73,
                    "windSpeed": 9.78,
                    "windBearing": 254,
                    "visibility": 9.3,
                    "cloudCover": 0.48,
                    "pressure": 1012.2,
                    "ozone": 310.56
                }, {
                    "time": 1493942400,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 64.04,
                    "apparentTemperature": 64.04,
                    "dewPoint": 56.42,
                    "humidity": 0.76,
                    "windSpeed": 9.71,
                    "windBearing": 256,
                    "visibility": 9.67,
                    "cloudCover": 0.46,
                    "pressure": 1011.95,
                    "ozone": 309.03
                }, {
                    "time": 1493946000,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 61.73,
                    "apparentTemperature": 61.73,
                    "dewPoint": 55.57,
                    "humidity": 0.8,
                    "windSpeed": 9.53,
                    "windBearing": 260,
                    "visibility": 9.85,
                    "cloudCover": 0.57,
                    "pressure": 1011.9,
                    "ozone": 307.98
                }, {
                    "time": 1493949600,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 59.39,
                    "apparentTemperature": 59.39,
                    "dewPoint": 54.85,
                    "humidity": 0.85,
                    "windSpeed": 9.32,
                    "windBearing": 262,
                    "visibility": 9.94,
                    "cloudCover": 0.76,
                    "pressure": 1011.96,
                    "ozone": 307.42
                }, {
                    "time": 1493953200,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 57.71,
                    "apparentTemperature": 57.71,
                    "dewPoint": 54.45,
                    "humidity": 0.89,
                    "windSpeed": 9.09,
                    "windBearing": 265,
                    "visibility": 10,
                    "cloudCover": 0.91,
                    "pressure": 1012.13,
                    "ozone": 307.78
                }, {
                    "time": 1493956800,
                    "summary": "Overcast",
                    "icon": "cloudy",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 56.86,
                    "apparentTemperature": 56.86,
                    "dewPoint": 54.16,
                    "humidity": 0.91,
                    "windSpeed": 8.85,
                    "windBearing": 267,
                    "visibility": 10,
                    "cloudCover": 0.95,
                    "pressure": 1012.49,
                    "ozone": 309.62
                }, {
                    "time": 1493960400,
                    "summary": "Overcast",
                    "icon": "cloudy",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 56.38,
                    "apparentTemperature": 56.38,
                    "dewPoint": 53.94,
                    "humidity": 0.92,
                    "windSpeed": 8.72,
                    "windBearing": 268,
                    "visibility": 10,
                    "cloudCover": 0.94,
                    "pressure": 1012.91,
                    "ozone": 312.39
                }, {
                    "time": 1493964000,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 55.85,
                    "apparentTemperature": 55.85,
                    "dewPoint": 53.58,
                    "humidity": 0.92,
                    "windSpeed": 8.66,
                    "windBearing": 270,
                    "visibility": 10,
                    "cloudCover": 0.93,
                    "pressure": 1013.19,
                    "ozone": 314.89
                }, {
                    "time": 1493967600,
                    "summary": "Overcast",
                    "icon": "cloudy",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 55.64,
                    "apparentTemperature": 55.64,
                    "dewPoint": 53.49,
                    "humidity": 0.92,
                    "windSpeed": 8.52,
                    "windBearing": 272,
                    "visibility": 10,
                    "cloudCover": 0.95,
                    "pressure": 1013.23,
                    "ozone": 316.46
                }, {
                    "time": 1493971200,
                    "summary": "Overcast",
                    "icon": "cloudy",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 55.46,
                    "apparentTemperature": 55.46,
                    "dewPoint": 53.36,
                    "humidity": 0.93,
                    "windSpeed": 8.38,
                    "windBearing": 275,
                    "visibility": 10,
                    "cloudCover": 0.98,
                    "pressure": 1013.14,
                    "ozone": 317.76
                }, {
                    "time": 1493974800,
                    "summary": "Overcast",
                    "icon": "cloudy",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 55.22,
                    "apparentTemperature": 55.22,
                    "dewPoint": 53.18,
                    "humidity": 0.93,
                    "windSpeed": 8.38,
                    "windBearing": 278,
                    "visibility": 10,
                    "cloudCover": 0.99,
                    "pressure": 1013.04,
                    "ozone": 319.6
                }, {
                    "time": 1493978400,
                    "summary": "Overcast",
                    "icon": "cloudy",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 54.86,
                    "apparentTemperature": 54.86,
                    "dewPoint": 52.93,
                    "humidity": 0.93,
                    "windSpeed": 8.57,
                    "windBearing": 281,
                    "visibility": 10,
                    "cloudCover": 1,
                    "pressure": 1012.95,
                    "ozone": 322.42
                }, {
                    "time": 1493982000,
                    "summary": "Overcast",
                    "icon": "cloudy",
                    "precipIntensity": 0.0014,
                    "precipProbability": 0.03,
                    "precipType": "rain",
                    "temperature": 54.45,
                    "apparentTemperature": 54.45,
                    "dewPoint": 52.62,
                    "humidity": 0.94,
                    "windSpeed": 8.81,
                    "windBearing": 283,
                    "visibility": 10,
                    "cloudCover": 1,
                    "pressure": 1012.86,
                    "ozone": 325.77
                }, {
                    "time": 1493985600,
                    "summary": "Overcast",
                    "icon": "cloudy",
                    "precipIntensity": 0.0018,
                    "precipProbability": 0.04,
                    "precipType": "rain",
                    "temperature": 54.16,
                    "apparentTemperature": 54.16,
                    "dewPoint": 52.31,
                    "humidity": 0.93,
                    "windSpeed": 9.04,
                    "windBearing": 286,
                    "visibility": 10,
                    "cloudCover": 0.98,
                    "pressure": 1012.84,
                    "ozone": 329.14
                }, {
                    "time": 1493989200,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-night",
                    "precipIntensity": 0.0014,
                    "precipProbability": 0.03,
                    "precipType": "rain",
                    "temperature": 54.02,
                    "apparentTemperature": 54.02,
                    "dewPoint": 52.03,
                    "humidity": 0.93,
                    "windSpeed": 9.36,
                    "windBearing": 290,
                    "visibility": 10,
                    "cloudCover": 0.9,
                    "pressure": 1012.9,
                    "ozone": 332.49
                }, {
                    "time": 1493992800,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 54.17,
                    "apparentTemperature": 54.17,
                    "dewPoint": 51.91,
                    "humidity": 0.92,
                    "windSpeed": 9.89,
                    "windBearing": 294,
                    "visibility": 10,
                    "cloudCover": 0.79,
                    "pressure": 1013.04,
                    "ozone": 335.87
                }, {
                    "time": 1493996400,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 54.83,
                    "apparentTemperature": 54.83,
                    "dewPoint": 52.01,
                    "humidity": 0.9,
                    "windSpeed": 10.51,
                    "windBearing": 297,
                    "visibility": 10,
                    "cloudCover": 0.7,
                    "pressure": 1013.2,
                    "ozone": 338.84
                }, {
                    "time": 1494000000,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 56.19,
                    "apparentTemperature": 56.19,
                    "dewPoint": 52.39,
                    "humidity": 0.87,
                    "windSpeed": 11.1,
                    "windBearing": 298,
                    "visibility": 10,
                    "cloudCover": 0.64,
                    "pressure": 1013.4,
                    "ozone": 341.36
                }, {
                    "time": 1494003600,
                    "summary": "Mostly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 58.01,
                    "apparentTemperature": 58.01,
                    "dewPoint": 52.93,
                    "humidity": 0.83,
                    "windSpeed": 11.7,
                    "windBearing": 297,
                    "visibility": 10,
                    "cloudCover": 0.6,
                    "pressure": 1013.61,
                    "ozone": 343.47
                }, {
                    "time": 1494007200,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 59.71,
                    "apparentTemperature": 59.71,
                    "dewPoint": 53.3,
                    "humidity": 0.79,
                    "windSpeed": 12.5,
                    "windBearing": 296,
                    "visibility": 10,
                    "cloudCover": 0.55,
                    "pressure": 1013.73,
                    "ozone": 344.92
                }, {
                    "time": 1494010800,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 60.95,
                    "apparentTemperature": 60.95,
                    "dewPoint": 53.16,
                    "humidity": 0.76,
                    "windSpeed": 13.84,
                    "windBearing": 294,
                    "visibility": 10,
                    "cloudCover": 0.43,
                    "pressure": 1013.73,
                    "ozone": 344.99
                }, {
                    "time": 1494014400,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 62.04,
                    "apparentTemperature": 62.04,
                    "dewPoint": 52.78,
                    "humidity": 0.72,
                    "windSpeed": 15.39,
                    "windBearing": 292,
                    "visibility": 10,
                    "cloudCover": 0.3,
                    "pressure": 1013.6,
                    "ozone": 344.39
                }, {
                    "time": 1494018000,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 62.98,
                    "apparentTemperature": 62.98,
                    "dewPoint": 52.39,
                    "humidity": 0.68,
                    "windSpeed": 16.5,
                    "windBearing": 291,
                    "visibility": 10,
                    "cloudCover": 0.26,
                    "pressure": 1013.37,
                    "ozone": 344.92
                }, {
                    "time": 1494021600,
                    "summary": "Partly Cloudy",
                    "icon": "partly-cloudy-day",
                    "precipIntensity": 0,
                    "precipProbability": 0,
                    "temperature": 63.71,
                    "apparentTemperature": 63.71,
                    "dewPoint": 51.9,
                    "humidity": 0.65,
                    "windSpeed": 16.85,
                    "windBearing": 290,
                    "visibility": 10,
                    "cloudCover": 0.35,
                    "pressure": 1013,
                    "ozone": 347.56
                }]
            },
            "daily": {
                "summary": "Light rain on Wednesday, with temperatures falling to 60°F on Wednesday.",
                "icon": "rain",
                "data": [{
                    "time": 1493794800,
                    "summary": "Partly cloudy overnight.",
                    "icon": "partly-cloudy-night",
                    "sunriseTime": 1493817144,
                    "sunsetTime": 1493866987,
                    "moonPhase": 0.27,
                    "precipIntensity": 0,
                    "precipIntensityMax": 0,
                    "precipProbability": 0,
                    "temperatureMin": 57.61,
                    "temperatureMinTime": 1493809200,
                    "temperatureMax": 77.87,
                    "temperatureMaxTime": 1493852400,
                    "apparentTemperatureMin": 57.61,
                    "apparentTemperatureMinTime": 1493809200,
                    "apparentTemperatureMax": 77.87,
                    "apparentTemperatureMaxTime": 1493852400,
                    "dewPoint": 54.32,
                    "humidity": 0.69,
                    "windSpeed": 4.7,
                    "windBearing": 280,
                    "visibility": 8.91,
                    "cloudCover": 0.12,
                    "pressure": 1013.19,
                    "ozone": 309.59
                }, {
                    "time": 1493881200,
                    "summary": "Mostly cloudy throughout the day.",
                    "icon": "partly-cloudy-day",
                    "sunriseTime": 1493903478,
                    "sunsetTime": 1493953443,
                    "moonPhase": 0.31,
                    "precipIntensity": 0,
                    "precipIntensityMax": 0,
                    "precipProbability": 0,
                    "temperatureMin": 55.85,
                    "temperatureMinTime": 1493964000,
                    "temperatureMax": 71.82,
                    "temperatureMaxTime": 1493931600,
                    "apparentTemperatureMin": 55.85,
                    "apparentTemperatureMinTime": 1493964000,
                    "apparentTemperatureMax": 71.82,
                    "apparentTemperatureMaxTime": 1493931600,
                    "dewPoint": 56.25,
                    "humidity": 0.83,
                    "windSpeed": 6.87,
                    "windBearing": 257,
                    "visibility": 7.44,
                    "cloudCover": 0.63,
                    "pressure": 1012.72,
                    "ozone": 315.03
                }, {
                    "time": 1493967600,
                    "summary": "Mostly cloudy throughout the day.",
                    "icon": "partly-cloudy-day",
                    "sunriseTime": 1493989814,
                    "sunsetTime": 1494039899,
                    "moonPhase": 0.34,
                    "precipIntensity": 0.0003,
                    "precipIntensityMax": 0.0018,
                    "precipIntensityMaxTime": 1493985600,
                    "precipProbability": 0.04,
                    "precipType": "rain",
                    "temperatureMin": 53.71,
                    "temperatureMinTime": 1494050400,
                    "temperatureMax": 64.19,
                    "temperatureMaxTime": 1494025200,
                    "apparentTemperatureMin": 53.71,
                    "apparentTemperatureMinTime": 1494050400,
                    "apparentTemperatureMax": 64.19,
                    "apparentTemperatureMaxTime": 1494025200,
                    "dewPoint": 50.85,
                    "humidity": 0.79,
                    "windSpeed": 12.25,
                    "windBearing": 290,
                    "visibility": 10,
                    "cloudCover": 0.73,
                    "pressure": 1012.79,
                    "ozone": 344.14
                }, {
                    "time": 1494054000,
                    "summary": "Partly cloudy until afternoon.",
                    "icon": "partly-cloudy-day",
                    "sunriseTime": 1494076152,
                    "sunsetTime": 1494126355,
                    "moonPhase": 0.37,
                    "precipIntensity": 0,
                    "precipIntensityMax": 0,
                    "precipProbability": 0,
                    "temperatureMin": 50.27,
                    "temperatureMinTime": 1494064800,
                    "temperatureMax": 65.81,
                    "temperatureMaxTime": 1494115200,
                    "apparentTemperatureMin": 50.27,
                    "apparentTemperatureMinTime": 1494064800,
                    "apparentTemperatureMax": 65.81,
                    "apparentTemperatureMaxTime": 1494115200,
                    "dewPoint": 44.64,
                    "humidity": 0.66,
                    "windSpeed": 10,
                    "windBearing": 306,
                    "visibility": 10,
                    "cloudCover": 0.33,
                    "pressure": 1008.77,
                    "ozone": 404.83
                }, {
                    "time": 1494140400,
                    "summary": "Mostly cloudy until evening.",
                    "icon": "partly-cloudy-day",
                    "sunriseTime": 1494162490,
                    "sunsetTime": 1494212810,
                    "moonPhase": 0.41,
                    "precipIntensity": 0.0007,
                    "precipIntensityMax": 0.0016,
                    "precipIntensityMaxTime": 1494176400,
                    "precipProbability": 0.03,
                    "precipType": "rain",
                    "temperatureMin": 50.8,
                    "temperatureMinTime": 1494165600,
                    "temperatureMax": 61.19,
                    "temperatureMaxTime": 1494201600,
                    "apparentTemperatureMin": 50.8,
                    "apparentTemperatureMinTime": 1494165600,
                    "apparentTemperatureMax": 61.19,
                    "apparentTemperatureMaxTime": 1494201600,
                    "dewPoint": 44.19,
                    "humidity": 0.67,
                    "windSpeed": 2.4,
                    "windBearing": 316,
                    "cloudCover": 0.65,
                    "pressure": 1007.89,
                    "ozone": 396.64
                }, {
                    "time": 1494226800,
                    "summary": "Partly cloudy throughout the day.",
                    "icon": "partly-cloudy-day",
                    "sunriseTime": 1494248830,
                    "sunsetTime": 1494299265,
                    "moonPhase": 0.44,
                    "precipIntensity": 0,
                    "precipIntensityMax": 0,
                    "precipProbability": 0,
                    "temperatureMin": 50.87,
                    "temperatureMinTime": 1494241200,
                    "temperatureMax": 63.14,
                    "temperatureMaxTime": 1494277200,
                    "apparentTemperatureMin": 50.87,
                    "apparentTemperatureMinTime": 1494241200,
                    "apparentTemperatureMax": 63.14,
                    "apparentTemperatureMaxTime": 1494277200,
                    "dewPoint": 47.89,
                    "humidity": 0.75,
                    "windSpeed": 4.3,
                    "windBearing": 212,
                    "cloudCover": 0.23,
                    "pressure": 1011.81,
                    "ozone": 341.17
                }, {
                    "time": 1494313200,
                    "summary": "Partly cloudy throughout the day.",
                    "icon": "partly-cloudy-day",
                    "sunriseTime": 1494335171,
                    "sunsetTime": 1494385720,
                    "moonPhase": 0.47,
                    "precipIntensity": 0,
                    "precipIntensityMax": 0,
                    "precipProbability": 0,
                    "temperatureMin": 49.43,
                    "temperatureMinTime": 1494331200,
                    "temperatureMax": 63.86,
                    "temperatureMaxTime": 1494367200,
                    "apparentTemperatureMin": 49.41,
                    "apparentTemperatureMinTime": 1494327600,
                    "apparentTemperatureMax": 63.86,
                    "apparentTemperatureMaxTime": 1494367200,
                    "dewPoint": 48.58,
                    "humidity": 0.76,
                    "windSpeed": 6.35,
                    "windBearing": 238,
                    "cloudCover": 0.54,
                    "pressure": 1014.05,
                    "ozone": 321.11
                }, {
                    "time": 1494399600,
                    "summary": "Light rain starting in the evening.",
                    "icon": "rain",
                    "sunriseTime": 1494421514,
                    "sunsetTime": 1494472175,
                    "moonPhase": 0.51,
                    "precipIntensity": 0.0056,
                    "precipIntensityMax": 0.0367,
                    "precipIntensityMaxTime": 1494482400,
                    "precipProbability": 0.69,
                    "precipType": "rain",
                    "temperatureMin": 53.99,
                    "temperatureMinTime": 1494424800,
                    "temperatureMax": 60,
                    "temperatureMaxTime": 1494453600,
                    "apparentTemperatureMin": 53.99,
                    "apparentTemperatureMinTime": 1494424800,
                    "apparentTemperatureMax": 60,
                    "apparentTemperatureMaxTime": 1494453600,
                    "dewPoint": 52.69,
                    "humidity": 0.86,
                    "windSpeed": 10.43,
                    "windBearing": 209,
                    "cloudCover": 0.83,
                    "pressure": 1017.41,
                    "ozone": 332.68
                }]
            },
            "flags": {
                "sources": ["lamp", "gfs", "cmc", "nam", "rap", "rtma", "sref", "fnmoc", "isd", "madis", "nearest-precip", "nwspa", "darksky"],
                "lamp-stations": ["KAPC", "KCCR", "KHWD", "KLVK", "KNUQ", "KOAK", "KPAO", "KSFO", "KSQL"],
                "isd-stations": ["724943-99999", "745039-99999", "745045-99999", "745060-23239", "745065-99999", "994016-99999", "994033-99999", "994036-99999", "997734-99999", "998163-99999", "998197-99999", "998476-99999", "998477-99999", "998479-99999", "999999-23239", "999999-23272"],
                "madis-stations": ["AU915", "C5988", "C8158", "CQ147", "D5422", "D8008", "E0426", "E9227", "FTPC1", "GGBC1", "OKXC1", "OMHC1", "PPXC1", "PXOC1", "SFOC1", "TIBC1"],
                "units": "us"
            }
        },
        "status": 200,
        "config": {
            "method": "GET",
            "transformRequest": [null],
            "transformResponse": [null],
            "jsonpCallbackParam": "callback",
            "url": "https://api.darksky.net/forecast/51ad5a6fd44830ae0a78d025de05e749/37.8267,-122.4233",
            "headers": {
                "Accept": "application/json, text/plain, */*"
            }
        },
        "statusText": "OK"
    };
});
'use strict';

angular.module('weatherApp').directive('currentWeather', function () {

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
    controller: ["$scope", "weatherData", function ($scope, weatherData) {
      $scope.getCurrWeath = weatherData.allData.data.currently;
    }]
  };
}); //-------------------------------------------------------------------------
'use strict';

angular.module('weatherApp').directive('dailyWeather', function () {

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
  };
}); //-------------------------------------------------------------------------
// document.addEventListener("DOMContentLoaded", function(event) {
//
// //------------------------------------------------------------------------------
// //            Variables
// //------------------------------------------------------------------------------
//
//   var artContainer = document.getElementById('artwork-container')
//
//
//   //------------------------------------------------------------------------------
//   //            timelines
//   //------------------------------------------------------------------------------
//
//   var tlTest = new TimelineMax({});
//
//   tlTest.to(artContainer, 5, {backgroundImage: `radial-gradient(circle at 0% 90%, #e3e5f3, #e38c59, #a33d4b,#46142b)`})
//
//// $('#btnPlay').on('click', () => tlTest.play());
// $('#btnPause').on('click', () => tlTest.pause());
// $('#btnResume').on('click', () => tlTest.resume());
// $('#btnReverse').on('click', () => tlTest.reverse());
// $('#btnSpeedUp').on('click', () => tlTest.timeScale(3));
// $('#btnSlowDown').on('click', () => tlTest.timeScale(0.2));
// $('#btnSeek').on('click', () => tlTest.seek(2));//goes to a labeled position or time in the animation
// $('#btnProgress').on('click', () => tlTest.progress(0.5));// goes to progress of animation (0-1 start-finish)
// $('#btnRestart').on('click', () => tlTest.restart());
//


// var setSunPosition = function(time) {
//   var hour = $scope.unixTo24Hour(time);
//   var timePositions = {
//     '0': [30, 48, "#00000c"],
//     '1': [50, 40, "#020111 85%,#191621 100%"],
//     '2': [60, 43, "#020111 60%,#20202c 100%"],
//     '3': [70, 48, "#020111 10%,#3a3a52 100%"],
//     '4': [80, 57, '#20202c 0%,#515175 100%'],
//     '5': [90, 69, '#40405c 0%,#6f71aa 80%,#8a76ab 100%'],
//     '6': [100, 80, '#4a4969 0%,#7072ab 50%,#cd82a0 100%'],
//     '7': [0, 150, '#757abf 0%,#8583be 60%,#eab0d1 100%'],
//     '8': [8, 69, '#82addb 0%,#ebb2b1 100%'],
//     '9': [16, 59, '#94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%'],
//     '10': [25, 50, '#b7eaff 0%,#94dfff 100%'],
//     '11': [33, 44, '#9be2fe 0%,#67d1fb 100%'],
//     '12': [41, 41, '#90dffe 0%,#38a3d1 100%'],
//     '13': [50, 40, '#57c1eb 0%,#246fa8 100%'],
//     '14': [50, 40, '#2d91c2 0%,#1e528e 100%'],
//     '15': [58, 41, '#2473ab 0%,#1e528e 70%,#5b7983 100%'],
//     '16': [66, 44, '#1e528e 0%,#265889 50%,#9da671 100%'],
//     '17': [75, 50, '#1e528e 0%,#728a7c 50%,#e9ce5d 100%'],
//     '18': [83, 58, '#154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%'],
//     '19': [91, 68, '#163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%'],
//     '20': [100, 82, '#071B26 0%,#071B26 30%,#8A3B12 80%,#240E03 100%'],
//     '21': [100, 150, '#010A10 30%,#59230B 80%,#2F1107 100%'],
//     '22': [0, 80, '#090401 50%,#4B1D06 100%'],
//     '23': [10, 69, '#00000c 80%,#150800 100%'],
//     '24': [40, 43, '#00000c'],
//   };
//   return timePositions[hour];
//   }


// });
"use strict";
'use strict';

angular.module('weatherApp').controller('homeCtrl', ["$scope", "$q", "mainService", "weatherData", function ($scope, $q, mainService, weatherData) {

  $scope.getWeatherData = function () {
    var deferred = $q.defer();
    navigator.geolocation.getCurrentPosition(deferred.resolve);
    deferred.promise.then(function (res) {
      return mainService.getWeatherData(res.coords.latitude, res.coords.longitude);
    }).then(function (results) {
      console.log(results);
      $scope.weather = results;
      $scope.daily = results.data.daily.data;
      $scope.current = results.data.currently;
      $scope.hourly = results.data.hourly.data;
      $scope.hourly[1].icon = 'snow';
      $scope.hourly[1].windSpeed = 10;
      $scope.hourly[1].precipIntensity = 1;
      changeArt();
    });
  };

  $scope.getWeatherData();

  $scope.unixToTime = function (time) {
    var date = new Date(time * 1000);
    return date;
  };

  $scope.unixTo24Hour = function (time) {
    var date = new Date(time * 1000).getHours();
    return date;
  };

  $scope.selectedTime = 0;

  var setCurrentState = function setCurrentState(sliderValue) {
    return $scope.hourly[sliderValue];
  };

  //------------------------------------------------------------------------------
  //            Variables
  //------------------------------------------------------------------------------

  var artContainer = $('#artwork-container');
  var sun = $('.sun');
  var pulse = $('.sun-pulse');
  var mountains = $('#mountains');
  var mountainAccents = $('#mountains-accents');
  var mountainLeft = $('#mountain-left');
  var ground = $('#ground');
  var groundAccent = $('#ground-accent');
  var timeSlider = $('#timeSlider');
  var slider = $('.slider');
  var graySkyFilter = $('.gray-sky');
  var precipClouds = $('.precip-cloud');
  var pcLeftLarge = '#precip-cloud-left-large';
  var pcLeftSmall = '#precip-cloud-left-small';
  var pcRightLarge = '#precip-cloud-right-large';
  var pcRightSmall = '#precip-cloud-right-small';
  var pcTop = $('#precip-cloud-top');
  var windPath1 = $('#windPath1');
  var windPath2 = $('#windPath2');
  var windPath3 = $('#windPath3');
  var windPath4 = $('#windPath4');

  var nightColors = "#ffffff 3%,#e3e5f3 5%,#64676b 8%,#3a3a3a,#282828,#101111";
  var duskColors = '#ffffff 3%,#e3e5f3 5%,#64676b 8%,#414345,#232526,#101111';
  var sunriseColors1 = '#ffdd93 3%,#64676b 8%,#cd82a0,#8a76ab,#3a3a52';
  var sunriseColors2 = 'rgb(255,194,82) 3%,#e3e5f3 8%,#eab0d1,#cd82a0,#7072ab';
  var sunriseColors3 = 'rgb(255,194,82) 3%,#e3e5f3 8%,#a6e6ff,#67d1fb,#eab0d1';
  var dayColors = "rgb(255,194,82) 3%,#e3e5f3 8%,#56CCF2,#4fa9ff,#008be2";
  var sunsetColors1 = 'rgb(255,194,82) 3%,#ffdd93 8%,#90dffe,#38a3d1,#154277';
  var sunsetColors2 = 'rgb(255,194,82) 3%,#e3e5f3 8%,#e38c59,#a33d4b,#46142b';
  var sunsetColors3 = 'rgb(255,194,82) 3%,#e9ce5d 8%,#B7490F,#8A3B12,#2F1107';

  var mountainFillDay = 'hsl(40,54%,35%)';
  var mountainAccentFillDay = 'hsl(40,85%,84%)';
  var groundFillDay = 'hsl(78,60%,42%)';
  var groundAccentFillDay = 'hsl(78,76%,72%)';
  var leftMountainFillDay = 'hsl(41,76%,22%)';

  var mountainFillSunrise1 = '#7f5f4c';
  var mountainAccentFillSunrise1 = '#FFE9AD';
  var groundFillSunrise1 = '#6c8c21';
  var groundAccentFillSunrise1 = '#a5b754';
  var leftMountainFillSunrise1 = '#724f0c';

  var mountainFillSunrise2 = '#704545';
  var mountainAccentFillSunrise2 = '#ffa100';
  var groundFillSunrise2 = '#af7700';
  var groundAccentFillSunrise2 = '#2e3a30';
  var leftMountainFillSunrise2 = '#333333';

  var mountainFillSunrise3 = '#5b343a';
  var mountainAccentFillSunrise3 = '#aa4419';
  var groundFillSunrise3 = '#50450b';
  var groundAccentFillSunrise3 = '#2e3a30';
  var leftMountainFillSunrise3 = '#333333';

  var mountainFillSunset1 = '#7f5f4c';
  var mountainAccentFillSunset1 = '#FFE9AD';
  var groundFillSunset1 = '#6c8c21';
  var groundAccentFillSunset1 = '#a5b754';
  var leftMountainFillSunset1 = '#724f0c';

  var mountainFillSunset2 = '#704545';
  var mountainAccentFillSunset2 = '#ffa100';
  var groundFillSunset2 = '#af7700';
  var groundAccentFillSunset2 = '#2e3a30';
  var leftMountainFillSunset2 = '#333333';

  var mountainFillSunset3 = '#5b343a';
  var mountainAccentFillSunset3 = '#aa4419';
  var groundFillSunset3 = '#50450b';
  var groundAccentFillSunset3 = '#2e3a30';
  var leftMountainFillSunset3 = '#333333';

  var mountainFillNight = 'hsl(278,7%,16%)';
  var mountainAccentFillNight = 'hsl(279,6%,12%)';
  var groundFillNight = 'hsl(130,11%,22%)';
  var groundAccentFillNight = 'hsl(130,6%,10%)';
  var leftMountainFillNight = 'hsl(0,0%,10%)';

  var tlHourChange = new TimelineMax();
  var isItRaining = false;
  var isItSnowing = false;
  var precipCloudsShown = false;
  var stars = false;

  //------------------------------------------------------------------------------
  //            Functions
  //------------------------------------------------------------------------------

  var findSunPosition = function findSunPosition(time) {
    var hour = $scope.unixTo24Hour(time);
    var timePositions = {
      '0': [50, 10, nightColors, mountainFillNight, mountainAccentFillNight, groundFillNight, groundAccentFillNight, leftMountainFillNight, stars = true],
      '1': [70, 25, nightColors, mountainFillNight, mountainAccentFillNight, groundFillNight, groundAccentFillNight, leftMountainFillNight, stars = true],
      '2': [85, 40, nightColors, mountainFillNight, mountainAccentFillNight, groundFillNight, groundAccentFillNight, leftMountainFillNight, stars = true],
      '3': [100, 120, nightColors, mountainFillNight, mountainAccentFillNight, groundFillNight, groundAccentFillNight, leftMountainFillNight, stars = true],
      '4': [100, 270, nightColors, mountainFillNight, mountainAccentFillNight, groundFillNight, groundAccentFillNight, leftMountainFillNight, stars = true],
      '5': [50, 420, nightColors, mountainFillNight, mountainAccentFillNight, groundFillNight, groundAccentFillNight, leftMountainFillNight, stars = true],
      '6': [0, 270, sunriseColors1, mountainFillSunrise1, mountainAccentFillSunrise1, groundFillSunrise1, groundAccentFillSunrise1, leftMountainFillSunrise1, stars = true],
      '7': [8, 69, sunriseColors2, mountainFillSunrise2, mountainAccentFillSunrise2, groundFillSunrise2, groundAccentFillSunrise2, leftMountainFillSunrise2, stars = true],
      '8': [16, 39, sunriseColors3, mountainFillSunrise3, mountainAccentFillSunrise3, groundFillSunrise3, groundAccentFillSunrise3, leftMountainFillSunrise3, stars = true],
      '9': [25, 20, dayColors, mountainFillDay, mountainAccentFillDay, groundFillDay, groundAccentFillDay, leftMountainFillDay, stars = true],
      '10': [33, 14, dayColors, mountainFillDay, mountainAccentFillDay, groundFillDay, groundAccentFillDay, leftMountainFillDay, stars = true],
      '11': [41, 11, dayColors, mountainFillDay, mountainAccentFillDay, groundFillDay, groundAccentFillDay, leftMountainFillDay, stars = true],
      '12': [50, 10, dayColors, mountainFillDay, mountainAccentFillDay, groundFillDay, groundAccentFillDay, leftMountainFillDay, stars = true],
      '13': [58, 11, dayColors, mountainFillDay, mountainAccentFillDay, groundFillDay, groundAccentFillDay, leftMountainFillDay, stars = true],
      '14': [66, 14, dayColors, mountainFillDay, mountainAccentFillDay, groundFillDay, groundAccentFillDay, leftMountainFillDay, stars = true],
      '15': [75, 20, dayColors, mountainFillDay, mountainAccentFillDay, groundFillDay, groundAccentFillDay, leftMountainFillDay, stars = true],
      '16': [83, 28, dayColors, mountainFillDay, mountainAccentFillDay, groundFillDay, groundAccentFillDay, leftMountainFillDay, stars = true],
      '17': [91, 38, dayColors, mountainFillDay, mountainAccentFillDay, groundFillDay, groundAccentFillDay, leftMountainFillDay, stars = true],
      '18': [100, 60, sunsetColors1, mountainFillSunset1, mountainAccentFillSunset1, groundFillSunset1, groundAccentFillSunset1, leftMountainFillSunset1, stars = true],
      '19': [100, 120, sunsetColors2, mountainFillSunset2, mountainAccentFillSunset2, groundFillSunset2, groundAccentFillSunset2, leftMountainFillSunset2, stars = true],
      '20': [100, 270, sunsetColors3, mountainFillSunset3, mountainAccentFillSunset3, groundFillSunset3, groundAccentFillSunset3, leftMountainFillSunset3, stars = true],
      '21': [50, 420, duskColors, mountainFillNight, mountainAccentFillNight, groundFillNight, groundAccentFillNight, leftMountainFillNight, stars = true],
      '22': [0, 120, nightColors, mountainFillNight, mountainAccentFillNight, groundFillNight, groundAccentFillNight, leftMountainFillNight, stars = true],
      '23': [15, 40, nightColors, mountainFillNight, mountainAccentFillNight, groundFillNight, groundAccentFillNight, leftMountainFillNight, stars = true],
      '24': [30, 25, nightColors, mountainFillNight, mountainAccentFillNight, groundFillNight, groundAccentFillNight, leftMountainFillNight, stars = true]
    };
    return timePositions[hour];
  };

  var changeArt = function changeArt() {
    var config = findSunPosition(0);
    var shadowX = (config[0] - 50) / 5;
    TweenMax.to(artContainer, 1, { ease: Power2.easeOut, backgroundImage: 'radial-gradient(circle at ' + config[0] + '% ' + config[1] + '%,' + config[2] });
  };

  var hexToHSL = function hexToHSL(hex) {
    hex = hex.replace(/^#/, "");
    r = parseInt(hex.substring(0, 2), 16) / 255;
    g = parseInt(hex.substring(2, 4), 16) / 255;
    b = parseInt(hex.substring(4, 6), 16) / 255;

    console.log(r, g, b);

    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);break;
        case g:
          h = (b - r) / d + 2;break;
        case b:
          h = (r - g) / d + 4;break;
      }
      h /= 6;
    }

    return [~~(h * 360), ~~(s * 100), ~~(l * 100)];
  };

  //------------------------------------------------------------------------------
  //            Time Change Animation
  //------------------------------------------------------------------------------

  tlHourChange.add('initial');

  // adds scope listener for changes to slider.
  // moves progress of timeline to progress position based on slider position
  // TweenMax makes movements between progress smooth

  $scope.$watch('selectedTime', function (sliderTime) {

    // Set variables for function

    var current = $scope.hourly[sliderTime];
    var time = current.time || 0;
    var config = findSunPosition(time);
    var moveClouds = function moveClouds() {
      var tlCloudMovement = new TimelineMax();
      tlCloudMovement.add('initial');
      tlCloudMovement.to(pcLeftLarge, 4000 / current.windSpeed, { x: "0vw", repeat: -1, yoyo: true }, 'initial').to(pcLeftSmall, 2000 / current.windSpeed, { x: "150vw", repeat: -1, yoyo: true }, 'initial').to(pcRightLarge, 4000 / current.windSpeed, { x: "100vw", repeat: -1, yoyo: true }, 'initial').to(pcRightSmall, 1500 / current.windSpeed, { x: "250vw", repeat: -1, yoyo: true }, 'initial');
    };

    // Toggle rain or snow depending on conditions

    if (current.icon.includes('snow')) {
      if (!isItSnowing) {
        isItRaining = false;
        isItSnowing = true;
        setTimeout(function () {
          return makeItSnow(current.precipIntensity, current.windSpeed);
        }, 500);
      }
    } else if (current.icon.includes('rain')) {
      if (!isItRaining) {
        isItSnowing = false;
        isItRaining = true;
        setTimeout(function () {
          return makeItRain(current.precipIntensity, current.windSpeed);
        }, 500);
      }
    } else {
      isItSnowing = false;
      isItRaining = false;
    }

    // Toggle gray sky background if it is raining, snowing, or cloud cover is over 75%

    if (current.cloudCover >= 0.7) {
      if (21 <= time || time < 6) {
        tlHourChange.to(graySkyFilter, 0.5, { opacity: 1, backgroundImage: 'linear-gradient(0, #666, #444)' }, 'initial');
      } else if (21 > time || time >= 6) {
        tlHourChange.to(graySkyFilter, 0.5, { opacity: 1, backgroundImage: 'linear-gradient(0, #ccc, #aaa)' }, 'initial');
      }
    } else {
      tlHourChange.to(graySkyFilter, 0.5, { opacity: 0 }, 'initial');
    }

    // Show top rain cloud if it is raining or snowing

    if (isItRaining || isItSnowing) {
      tlHourChange.to(pcTop, 0.5, { opacity: 1 }, 'initial');
    } else if (!isItRaining && !isItSnowing) {
      tlHourChange.to(pcTop, 0.5, { opacity: 0 }, 'initial');
    }

    // Show background precipitation clouds if it is raining, snowing, or if the cloud cover is greater than 50%

    if (!precipCloudsShown) {
      if (current.cloudCover > 0.05 && current.cloudCover < 0.25) {
        tlHourChange.to(pcLeftSmall, 0.5, { left: "-10vw" }, 'initial');
      } else if (current.cloudCover > 0.25 && current.cloudCover < 0.5) {
        tlHourChange.to(pcLeftSmall, 0.5, { left: "-10vw" }, 'initial').to(pcRightSmall, 0.5, { right: "-20vw" }, 'initial');
      } else if (current.cloudCover > 0.5 || isItRaining || isItSnowing) {
        tlHourChange.to(pcLeftLarge, 0.5, { left: "-20vw" }, 'initial').to(pcLeftSmall, 0.5, { left: "-10vw" }, 'initial').to(pcRightLarge, 0.5, { right: "-20vw" }, 'initial').to(pcRightSmall, 0.5, { right: "-20vw", onComplete: moveClouds() }, 'initial');
        precipCloudsShown = true;
      }
    } else if (!isItRaining && !isItSnowing) {
      if (current.cloudCover < 0.5) {
        tlHourChange.to([pcLeftLarge, pcLeftSmall], 0.5, { left: '-250vw' }, 'initial').to([pcRightSmall, pcRightLarge], 0.5, { right: '-200vw' }, 'initial');
        precipCloudsShown = false;
      }
    }

    // Add wind if windSpeed > 2mph. Animation speed is determined by wind speed

    if (current.windSpeed >= 3) {

      var rand = function rand(range, min) {
        return ~~(Math.random() * range + min);
      };

      tlHourChange.set(windPath1, {
        strokeWidth: "0.1%",
        strokeDasharray: '200 7000',
        strokeDashoffset: '7000',
        animation: 'wind ' + ~~rand(3, 30 / current.windSpeed) + 's linear reverse infinite' }, 'initial');
      tlHourChange.set(windPath3, {
        strokeWidth: "0.1%",
        strokeDasharray: '200 5000',
        strokeDashoffset: '5000',
        animation: 'wind ' + ~~rand(3, 30 / current.windSpeed) + 's linear reverse infinite' }, 'initial');
      tlHourChange.set(windPath2, {
        strokeWidth: "0.1%",
        strokeDasharray: '150 7000',
        strokeDashoffset: '7000',
        animation: 'wind ' + ~~rand(3, 30 / current.windSpeed) + 's linear forwards infinite' }, 'initial');
      tlHourChange.set(windPath4, {
        strokeWidth: "0.1%",
        strokeDasharray: '150 5000',
        strokeDashoffset: '5000',
        animation: 'wind ' + ~~rand(3, 30 / current.windSpeed) + 's linear forwards infinite' }, 'initial');
    } else if (current.windSpeed < 3) {
      tlHourChange.set([windPath1, windPath2, windPath3, windPath4], { strokeWidth: 0 }, 'initial');
    }

    // Change sun/moon position and colors of artwork

    tlHourChange.to(artContainer, 0.2, { ease: Linear.easeNone, backgroundImage: 'radial-gradient(circle at ' + config[0] + '% ' + config[1] + '%, ' + config[2] }, 'initial').to(mountains, 0.2, { ease: Linear.easeNone, fill: config[3] }, 'initial').to(mountainAccents, 0.2, { ease: Linear.easeNone, fill: config[4] }, 'initial').to(ground, 0.2, { ease: Linear.easeNone, fill: config[5] }, 'initial').to(groundAccent, 0.2, { ease: Linear.easeNone, fill: config[6] }, 'initial').to(mountainLeft, 0.2, { ease: Linear.easeNone, fill: config[7] }, 'initial');

    tlHourChange = new TimelineMax();
  });

  //------------------------------------------------------------------------------
  //            Precipitation Canvas
  //------------------------------------------------------------------------------

  var makeItSnow = function makeItSnow(precipIntensity, windSpeed) {
    var ctx = document.getElementById('precipCanvas').getContext('2d');
    ctx.canvas.width = window.innerWidth * 2;
    ctx.canvas.height = window.innerHeight;
    var cW = ctx.canvas.width,
        cH = ctx.canvas.height;
    var particles = [];
    //  var maxParticles = precipIntensity * cW/2;
    var snowIntensity = precipIntensity;
    var windySnow = windSpeed;
    var maxParticles = snowIntensity * cW;

    function addParticle() {
      var s = ~~(Math.random() * 10) + 1;
      var yv = s;
      var xv = -1 + Math.random() * 2 + 0.5 + windySnow;
      var x = ~~(Math.random() * cW) + 1 - cW / 2;
      var y = 0;
      particles.push({ 'x': x, 'y': y, 's': s, 'yv': yv, 'xv': xv });
    }

    function precip() {
      if (particles.length < maxParticles && isItSnowing) {
        addParticle();
      }
      for (var i = 0; i < particles.length; i++) {
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.beginPath();
        // arc(x,y,radius,startAndle,endAndle,anticlockwise)
        ctx.arc(particles[i].x += particles[i].xv, particles[i].y += particles[i].yv, particles[i].s * 0.5, 0, Math.PI * 2, false);
        ctx.fill();
        if (particles[i].y > cH && isItSnowing) {
          particles[i].y = 0;
          particles[i].x = ~~(Math.random() * cW) + 1;
        } else if (particles[i].y > cH && !isItSnowing) {
          particles[i].yv = 0;
          particles[i].y = -5;
        } else if (!isItSnowing) {
          particles[i].yv *= 3;
        }
      }
    }

    function animate() {

      ctx.save();
      ctx.clearRect(0, 0, cW, cH);
      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.fillRect(0, 0, cW, cH);
      //rotates the canvas
      //  ctx.rotate(~~(-windySnow/10));
      precip();
      ctx.restore();
    }

    var animateInterval = setInterval(function () {
      animate();
      if (!isItSnowing) {
        setTimeout(function () {
          return clearInterval(animateInterval);
        }, 500);
      }
    }, 30);
  };

  var makeItRain = function makeItRain(precipIntensity, windSpeed) {
    var ctx = document.getElementById('precipCanvas').getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    var w = ctx.canvas.width,
        h = ctx.canvas.height;
    ctx.strokeStyle = '#76b1e2';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';

    //  var windyRain = Math.random()*5 + 2.5;
    var windyRain = windSpeed;
    var rainIntensity = precipIntensity;

    var particles = [];
    var maxParts = rainIntensity * w;

    function addParticle() {

      particles.push({
        x: Math.random() * w,
        y: 0,
        l: Math.random() * 1,
        xs: -1 + Math.random() * 2 + 0.5 + windyRain,
        ys: Math.random() * 10 + 50 + rainIntensity * 2
      });
    }

    function draw() {

      if (particles.length < maxParts) {
        for (var a = 0; a < 5; a++) {
          addParticle();
        }
      }

      ctx.clearRect(0, 0, w, h);
      for (var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    }

    function move() {
      for (var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if (p.x > w && isItRaining || p.y > h && isItRaining) {
          p.x = Math.random() * w;
          p.y = -20;
        } else if (!isItRaining) {
          ctx.globalAlpha -= 0.1;
        }

        //  (p.x > w && !isItRaining || p.y > h && !isItRaining){
        //    p.ys = 0;
        //    p.xs = 0;
        //    p.y = -5;
        //  } else if (!isItRaining) {
        //    p.ys *= 5;
        //  }
      }
    }

    var animateInterval = setInterval(function () {
      draw();
      if (!isItRaining) {
        setTimeout(function () {
          return clearInterval(animateInterval);
        }, 500);
      }
    }, 30);
  };

  //---------------------------------------------------------------------------
  //                 Stars Canvas
  //---------------------------------------------------------------------------

  // var starShine = function() {
  //                   var ctx = document.getElementById('starsCanvas').getContext('2d');
  //                   ctx.canvas.width = window.innerWidth;
  //                   ctx.canvas.height = window.innerHeight;
  //                   var cW = ctx.canvas.width, cH = ctx.canvas.height;
  //                   var starsTemp = [];
  //                   var stars2 = [];
  //                   var stars3 = [];
  //                   var stars4 = [];
  //                   var stars5 = [];
  //                   var maxStars = 150;
  //
  //                   function makeStar(arr) {
  //                     var x = ~~(Math.random()*cW)+1;
  //                     var y = ~~(Math.random()*cH)+1;
  //                     var s = ~~(Math.random()*2)+1;
  //                     var inc = true;
  //                     arr.push({'x':x,'y':y,'s':s})
  //                   }
  //
  //                   for (let j = 0; j < 5; j++) {
  //                     for (let i = 0; i < maxStars/5; i++) {
  //                       makeStar()
  //                     }
  //
  //                     for(let i = 0; i < stars[j].length; i++) {
  //                       ctx.fillStyle = 'rgb(255,255,255)';
  //                       ctx.beginPath();
  //                         // arc(x,y,radius,startAndle,endAndle,anticlockwise)
  //                       ctx.arc(stars[i].x,stars[i].y, stars[i].s*0.5, 0, Math.PI*2, false);
  //                       ctx.globalAlpha = stars[i].s
  //                       ctx.fill();
  //                      }
  //                    }
  //
  //
  //                   function twinkle(index) {
  //                      TweenMax.to(stars)
  //                   }
  //
  //
  // };
}]); //---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------