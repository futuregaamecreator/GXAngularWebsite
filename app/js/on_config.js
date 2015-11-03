'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    var example = {
        name: 'Example',
        url: '/example',
        controller: 'ExampleCtrl as home',
        templateUrl: 'example.html',
        title: 'Example'
    };

    var test = {
        name: 'Test',
        url: '/test',
        controller: 'TestCtrl as test',
        templateUrl: 'test.html',
        title: 'Test'
    };

    var home = {
        name: 'Home',
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: 'home.html',
        title: 'Home'
    };

    var about = {
        name: 'About Us',
        url: '/about',
        controller: 'AboutUsCtrl as about',
        templateUrl: 'about.html',
        title: 'About'
    };

    $stateProvider.state(example);
    $stateProvider.state(test);
    $stateProvider.state(home);

    $stateProvider.state(about);


    $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;