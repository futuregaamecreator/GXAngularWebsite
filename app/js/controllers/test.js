'use strict';

var controllersModule = require('./_index');


/**
 * @ngInject
 */
function TestCtrl() {

    // ViewModel
    var vm = this;

    vm.alerts = [
        {type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'},
        {type: 'success', msg: 'Well done! You successfully read this important alert message.'}
    ];

    vm.closeAlert = function (index) {
        vm.alerts.splice(index, 1);
    };

}

controllersModule.controller('TestCtrl', TestCtrl);