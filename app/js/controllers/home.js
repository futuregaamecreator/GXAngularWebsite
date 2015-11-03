'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeCtrl() {

    // ViewModel
    var vm = this;
    vm.slides = [
        {
            image: '../images/webslider1.jpeg'
        }, {
            image: '../images/webinterngx.jpeg'
        }
    ];

}

controllersModule.controller('HomeCtrl', HomeCtrl);