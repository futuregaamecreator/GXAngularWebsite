'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function AboutUsCtrl() {

    // ViewModel
    var vm = this;
    vm.quesOneColl= {
        name: "one", 
        value: true
    };
    vm.quesTwoColl={
        name: "two", 
        value: true
    };
    vm.quesThreeColl= {
        name: "three", 
        value: true
    };
    vm.quesFourColl={
        name: "four", 
        value: true
    };
    vm.quesFiveColl= {
        name: "five", 
        value: true
    };
    vm.quesSixColl={
        name: "six", 
        value: true
    };
    vm.quesSevenColl={
        name: "seven", 
        value: true
    };
    
    vm.isQuesColl=function(object){
      switch (object.name){
          case "one":
              vm.quesOneColl.value=!vm.quesOneColl.value;
              break;
          case "two":
              vm.quesTwoColl.value=!vm.quesTwoColl.value;
              break;
          case "three":
              vm.quesThreeColl.value=!vm.quesThreeColl.value;
              break;
          case "four":
              vm.quesFourColl.value=!vm.quesFourColl.value;
              break;
          case "five":
              vm.quesFiveColl.value=!vm.quesFiveColl.value;
              break;
          case "six":
              vm.quesSixColl.value=!vm.quesSixColl.value;
              break;
          case "seven":
              vm.quesSevenColl.value=!vm.quesSevenColl.value;
              break;
      }
    };

}

controllersModule.controller('AboutUsCtrl', AboutUsCtrl);