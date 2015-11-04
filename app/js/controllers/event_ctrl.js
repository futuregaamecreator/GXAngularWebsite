'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function EventCtrl() {

    // ViewModel
    var vm = this;

    vm.viewEvent=function(event){
        console.log(event);
    };

}

controllersModule.controller('EventCtrl', EventCtrl);