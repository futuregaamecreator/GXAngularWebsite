'use strict';

var controllersModule = require('./_index');


/**
 * @ngInject
 */
function TestCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'I am a test!';

}

controllersModule.controller('TestCtrl', TestCtrl);