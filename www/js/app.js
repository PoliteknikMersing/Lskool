
/* global angular, console, cordova, StatusBar */
angular.module('hascodeTagWizard',  ['ionic'])

   .run(function ($ionicPlatform) {
        "use strict";
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        "use strict";

        $stateProvider
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            .state('tab.map', {
                url: '/map',
                views: {
                    'map': {
                        templateUrl: "templates/map.html",
                        controller: 'MapController'
                    }
                }
            })


            .state('tab.search', {
                url: '/search',
                views: {
                    'tab-search': {
                        templateUrl: "templates/tab-search.html",
                        controller: 'SearchController'
                    }
                }
            })

            .state('tab.overview', {
                url: '/overview',
                views: {
                    'tab-overview': {
                        templateUrl: "templates/tab-overview.html",
                        controller: 'OverviewController'
                    }
                }
            })

            .state('tab.bus', {
                url: '/bus',
                views: {
                    'tab-bus': {
                        templateUrl: "templates/tab-bus.html",
                        controller: 'BusController'
                    }
                }
            })

            .state('detail-school', {
                url: 'http://cSkool.hol.es/index.php/senarai-sekolah2/details/:detailsid',
                templateUrl: "http://cSkool.hol.es/index.php/senarai-sekolah2",
                controller: 'SchoolViewController'
            })

            .state('tab.about', {
                url: '/about',
                views: {
                    'tab-about': {
                        templateUrl: "templates/tab-about.html",
                        controller: 'AboutController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/tab/map');
    });
