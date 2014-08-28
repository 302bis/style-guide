// Declare the main module
var bmiReporting = angular.module('bmiReporting', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap'
]);

// Initialize the main module
bmiReporting.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {

    'use strict';

    /**
     * Helper method for main page transitions. Useful for specifying a new page partial and an arbitrary transition.
     * @param  {String} path               The root-relative url for the new route
     * @param  {String} pageAnimationClass A classname defining the desired page transition
     */
    $rootScope.go = function (path, pageAnimationClass) {

        if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
            $rootScope.pageAnimationClass = 'crossFade';
        }
        
        else { // Use the specified animation
            $rootScope.pageAnimationClass = pageAnimationClass;
        }

        if (path === 'back') { // Allow a 'back' keyword to go to previous page
            $window.history.back();
        }
        
        else { // Go to the specified path
            $location.path(path);
        }
    };
}]);

// Configure the main module
bmiReporting.config(['$routeProvider', function ($routeProvider) {

    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'partials/intro.html'
        })
        .when('/introduction', {
            templateUrl: 'partials/intro.html'
        })
        .when('/colors', {
            templateUrl: 'partials/colors.html'
        })
        .when('/fonts', {
            templateUrl: 'partials/fonts.html'
        })
        .when('/textures', {
            templateUrl: 'partials/textures.html'
        })

	.when('/components', {
		templateUrl : 'partials/components.html'
	})
	
	.when('/navbar', {
		templateUrl : 'partials/navbar.html'
	})
	.when('/buttons', {
		templateUrl : 'partials/buttons.html'
	})
	.when('/tables', {
		templateUrl : 'partials/tables.html'
	})
	.when('/forms', {
		templateUrl : 'partials/forms.html'
	})
	.when('/navs', {
		templateUrl : 'partials/navs.html'
	})
	.when('/indicators', {
		templateUrl : 'partials/indicators.html'
	})
	.when('/progress_bars', {
		templateUrl : 'partials/progress_bars.html'
	})
	.when('/containers', {
		templateUrl : 'partials/containers.html'
	})
	.when('/dialogs', {
		templateUrl : 'partials/dialogs.html'
	})
	.when('/downloads', {
		templateUrl : 'partials/downloads.html'
	})
        .otherwise({
           templateUrl: 'partials/intro.html' 
        });
}]);
//Acordeón
function AccordionDemoCtrl($scope) {
}