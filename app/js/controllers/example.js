'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ExampleCtrl() {

  // ViewModel
  var vm = this;

  vm.title = window._.capitalize('angularJS, gulp, and browserify');
  vm.number = 1234;

}

controllersModule.controller('ExampleCtrl', ExampleCtrl);