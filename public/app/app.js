angular.module('weatherApp',['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home',{
      url: '/',
      template: "<h1>Now it works!</h1>"
    })





}); //-------------------------------------------------------------------------
