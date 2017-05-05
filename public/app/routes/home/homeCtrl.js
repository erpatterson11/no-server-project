angular.module('weatherApp').controller('homeCtrl', function($scope, mainService, weatherData){


$scope.getWeatherData = function() {
  mainService.getWeatherData().then(function(results) {
    console.log(results)
    $scope.weather = results;
    $scope.daily = results.data.daily.data
    $scope.current = results.data.currently
    $scope.hourly = results.data.hourly.data
  })
}

$scope.getWeatherData();



$scope.unixToTime = function(time) {
  var date = new Date(time*1000)
  return date;
}

$scope.unixTo24Hour = function(time) {
  var date = new Date(time*1000).getHours();
  return date;
}

$scope.selectedTime = 0;

var setCurrentState = function(sliderValue) {
  return $scope.hourly[sliderValue];
}



//------------------------------------------------------------------------------
//            Variables
//------------------------------------------------------------------------------

  var artContainer = $('#artwork-container');
  var sun = $('.sun');
  var pulse = $('.sun-pulse');
  var mountains = $('.mountainSVG');
  var mountainShadow = $('.mountains-shadow')
  var timeSlider = $('#timeSlider');
  var slider = $('.slider')



  var nightColors = "#ffffff 3%, #e3e5f3 5%,#64676b 8%,#3a3a3a,#282828, #101111";
  var duskColors = '#ffffff 3%, #e3e5f3 5%,#64676b 8%,#414345,#232526,#101111';
  var dawnColors = ''
  var sunriseColors1 = '#ffdd93 3%, #64676b 8%, #cd82a0, #8a76ab,#3a3a52';
  var sceneSunriseColors1 = '#5f5068, #423947, #333, #54825c, #2e3a30'
  var sunriseColors2 = 'rgb(255,194,82) 3%, #e3e5f3 8%, #eab0d1 ,#cd82a0,#7072ab';
  var sunriseColors3 = 'rgb(255,194,82) 3%, #e3e5f3 8%, #a6e6ff ,#67d1fb,#eab0d1'
  var dayColors = "rgb(255,194,82) 3%, #e3e5f3 8%, #56CCF2, #4fa9ff,#008be2";
  var sunsetColors1 = 'rgb(255,194,82) 3%, #ffdd93 8%,#90dffe, #38a3d1,#154277';
  var sunsetColors2 = 'rgb(255,194,82) 3%, #e3e5f3 8%, #e38c59, #a33d4b,#46142b';
  var sunsetColors3 = 'rgb(255,194,82) 3%, #e9ce5d 8%,#B7490F,#8A3B12,#2F1107';

  //------------------------------------------------------------------------------
  //            timelines
  //------------------------------------------------------------------------------





  var findSunPosition = function(time) {
    var hour = $scope.unixTo24Hour(time);
    var timePositions = {
      '0': [50, 10, nightColors, ],
      '1': [70, 25, nightColors, ],
      '2': [85, 40, nightColors, ],
      '3': [100, 120, nightColors, ],
      '4': [100, 270, nightColors, ],
      '5': [50, 420, nightColors, ],
      '6': [0, 270, sunriseColors1, sceneSunriseColors1],
      '7': [8, 69, sunriseColors2, ],
      '8': [16, 39, sunriseColors3, ],
      '9': [25, 30, dayColors, ],
      '10': [33, 14, dayColors, ],
      '11': [41, 11, dayColors, ],
      '12': [50, 10, dayColors, ],
      '13': [58, 11, dayColors, ],
      '14': [66, 14, dayColors, ],
      '15': [75, 20, dayColors, ],
      '16': [83, 28, dayColors, ],
      '17': [91, 38, dayColors, ],
      '18': [100, 60, sunsetColors1, ],
      '19': [100, 120, sunsetColors2, ],
      '20': [100, 270, sunsetColors3, ],
      '21': [50, 420, duskColors, ],
      '22': [0,120, nightColors, ],
      '23': [15, 40, nightColors, ],
      '24': [30, 25, nightColors, ],
    };
    return timePositions[hour];
    }



var tl = new TimelineMax();


// adds scope listener for changes to slider.
// moves progress of timeline to progress position based on slider position
// TweenMax makes movements between progress smooth

$scope.$watch('selectedTime', function(sliderTime) {
  let config = findSunPosition($scope.hourly[sliderTime].time)
  let shadowX = (config[0]-50)/5;
  tl.to(artContainer, 1, {ease: Power2.easeOut, backgroundImage: `radial-gradient(circle at ${config[0]}% ${config[1]}%,` + config[2] + ""})
 });

 // timeSlider.change('selectedTime', function(sliderTime) {
 //   let config = findSunPosition($scope.hourly[sliderTime].time)
 //   let shadowX = (config[0]-50)/5;
 //   tl.to(artContainer, 0.5, {ease: Circ.easeNone, backgroundImage: `radial-gradient(circle at ${config[0]}% ${config[1]}%,` + config[2] + ""})
 //  });










}) //---------------------------------------------------------------------------
