'use strict';

angular.module('app', [])
  .constant('HEADER', 'AngularJS application')

  .controller('AppCtrl', function(HEADER) {
    var vm = this;
    vm.header = HEADER;
  })

  .directive('hello', function() {
    return {
      restrict: 'E',
      scope: {
        to: '@'
      },
      template: '<div>Hello <span ng-bind="to"></span></div>'
    };
  });
