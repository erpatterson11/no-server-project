angular.module('weatherApp').controller('homeCtrl', function($scope, mainService, weatherData){


// $scope.getWeatherData = function() {
//   mainService.getWeatherData().then(function(results) {
//     console.log(results)
//     $scope.weather = results;
//   })
// }

// $scope.getWeatherData();

$scope.weather = weatherData.allData.data
$scope.daily = weatherData.allData.data.daily.data
$scope.current = weatherData.allData.data.currently
$scope.hourly = weatherData.allData.data.hourly.data

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
  var timeSlider = $('#timeSlider');
  var slider = $('.slider')
  var timescale = 12
  //  var sunXPos = function(x){return ~~((x/12)*100)};
  //  var sunYPos = function(x){
  //    var useX = sunXPos(x)-50;
  //    console.log(useX)
  //    return ~~(Math.pow(useX,2)*0.017)+40};
    var nightColors = "#414345,#3a3a3a,#282828, #101111";
    var duskColors = '#64676b,#414345,#232526,#101111';
    var dawnColors = ''
    var sunriseColors1 = '#64676b, #cd82a0, #8a76ab,#3a3a52';
    var sunriseColors2 = '#e3e5f3, #eab0d1 ,#cd82a0,#7072ab';
    var sunriseColors3 = '#e3e5f3, #a6e6ff ,#67d1fb,#eab0d1'
    var dayColors = "#e3e5f3, #56CCF2, #4fa9ff,#008be2";
    var sunsetColors1 = '#ffdd93,#90dffe, #38a3d1,#154277';
    var sunsetColors2 = '#e3e5f3, #e38c59, #a33d4b,#46142b';
    var sunsetColors3 = '#e9ce5d,#B7490F,#8A3B12,#2F1107';
    // var xPos;
    // var yPos;

  //------------------------------------------------------------------------------
  //            timelines
  //------------------------------------------------------------------------------


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


  var setSunPosition = function(time) {
    var hour = $scope.unixTo24Hour(time);
    var timePositions = {
      '0': [50, 40, nightColors],
      '1': [60, 43, nightColors],
      '2': [70, 48, nightColors],
      '3': [80, 69, nightColors],
      '4': [90, 90, nightColors],
      '5': [100, 150, nightColors],
      '6': [0, 300, sunriseColors1],
      '7': [8, 69, sunriseColors2],
      '8': [16, 59, sunriseColors3],
      '9': [25, 50, dayColors],
      '10': [33, 44, dayColors],
      '11': [41, 41, dayColors],
      '12': [50, 40, dayColors],
      '13': [58, 41, dayColors],
      '14': [66, 44, dayColors],
      '15': [75, 50, dayColors],
      '16': [83, 58, dayColors],
      '17': [91, 68, dayColors],
      '18': [100, 90, sunsetColors1],
      '19': [100, 150, sunsetColors2],
      '20': [100, 300, sunsetColors3],
      '21': [50, 450, duskColors],
      '22': [0,70, nightColors],
      '23': [30, 48, nightColors],
      '24': [40, 43, nightColors],
    };
    return timePositions[hour];
    }



var tlTest = new TimelineMax();


// adds scope listener for changes to slider.
// moves progress of timeline to progress position based on slider position
// TweenMax makes movements between progress smooth

$scope.$watch('selectedTime', function(sliderTime) {
  let config = setSunPosition($scope.hourly[sliderTime].time)
  tlTest.to(artContainer, 1.5, {ease: Power0.easeNone,backgroundImage: `radial-gradient(circle at ${config[0]}% ${config[1]}%,` + config[2] + ""})
 });


// $('#btnPlay').on('click', () => tlTest.play());
// $('#btnPause').on('click', () => tlTest.pause());
// $('#btnResume').on('click', () => tlTest.resume());
// $('#btnReverse').on('click', () => tlTest.reverse());
// $('#btnSpeedUp').on('click', () => tlTest.timeScale(3));
// $('#btnSlowDown').on('click', () => tlTest.timeScale(0.2));
// $('#btnSeek').on('click', () => tlTest.seek(2));//goes to a labeled position or time in the animation
// $('#btnProgress').on('click', () => tlTest.progress(0.5));// goes to progress of animation (0-1 start-finish)
// $('#btnRestart').on('click', () => tlTest.restart());









}) //---------------------------------------------------------------------------
