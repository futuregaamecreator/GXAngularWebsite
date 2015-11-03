'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function eventDirective() {

  return {
    restrict: 'A',
    scope:{
        detail:'&',
        eventsrc:'='
    },
   templateUrl:'../views/event-template.html'
   
  };

}

directivesModule.directive('eventDirective', eventDirective);/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


