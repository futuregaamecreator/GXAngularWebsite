'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    var home = {
        name: 'Home',
        url: '/',
        controller: 'ExampleCtrl as home',
        templateUrl: 'home.html',
        title: 'Home'
    };
    
    var test= {
        name: 'Test',
        url: '/test',
        controller: 'TestCtrl as test',
        templateUrl: 'test.html',
        title: 'Test'
    };

    $stateProvider.state(home);
    $stateProvider.state(test);


    $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;