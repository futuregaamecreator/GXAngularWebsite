'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    var test = {
        name: 'Test',
        url: '/test',
        controller: 'TestCtrl as test',
        templateUrl: 'test.html',
        title: 'Test'
    };

    var event = {
        name: 'event',
        url: '/event',
        templateUrl: 'event.html',
        title: 'Event'
    };

    var home = {
        name: 'home',
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: 'home.html',
        title: 'Home'
    };

    var about = {
        name: 'about',
        url: '/about',
        controller: 'AboutUsCtrl as about',
        templateUrl: 'about.html',
        title: 'About Us'
    };

    $stateProvider.state(test);
    $stateProvider.state(home);
    $stateProvider.state(event);
    $stateProvider.state(about);


    $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;