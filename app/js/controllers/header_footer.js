'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HeaderFooterCtrl($state) {

    // ViewModel
    var vm = this;

    vm.navigateTo = function (section) {
        $state.go(section);
    };
}

controllersModule.controller('HeaderFooterCtrl', HeaderFooterCtrl);