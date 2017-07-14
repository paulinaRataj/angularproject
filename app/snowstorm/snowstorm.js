angular.module('myApp.snowstorm', [])
    .directive('snowRainer', function ($timeout) {
      return {
        template: '<snow-flake ng-repeat="flake in flakes track by $index"></snow-flake>',
        link: function (scope, element, attrs) {
          scope.flakes = [];

          $element = angular.element(element);

          var giveMeAFlake = function () {
            scope.flakes.push('yea');
            $timeout(giveMeAFlake, 1000);
          };

          var destroyAFlake = function () {
            scope.flakes.shift();
            $timeout(destroyAFlake, 1000);
          };

          $timeout(destroyAFlake, 100000);

          giveMeAFlake();

          element.addEventListener('mousemove', function (event) {
            console.log(event);
          });
        }
      };
    })
    .directive('snowFlake', function ($timeout) {
      var athmosphereHeight = screen.availHeight,
          speed = 10;

      return function (scope, element, attrs) {
        var top = 0,
            left = 0;

        $element = angular.element(element);
        $element.css('left', parseInt(Math.random() * screen.availWidth) + 'px');

        var runSnowRun = function () {
          if (top < athmosphereHeight) {
            $element.css('top', athmosphereHeight + 'px');
            // $timeout(runSnowRun, 50);
          }
        };

        $timeout(runSnowRun, 50)
      };
    });
