// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'angularPromiseButtons',
    'toastr'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('website', {
            url: "/website",
            templateUrl: tempateURL,
            controller: 'WebsiteCtrl'
        })
        .state('ecommerce', {
            url: "/ecommerce",
            templateUrl: tempateURL,
            controller: 'EcommerceCtrl'
        })
        .state('couriers', {
            url: "/couriers",
            templateUrl: tempateURL,
            controller: 'CouriersCtrl'
        })
        .state('marketing', {
            url: "/marketing",
            templateUrl: tempateURL,
            controller: 'MarketingCtrl'
        })
        .state('marketplace', {
            url: "/marketplace",
            templateUrl: tempateURL,
            controller: 'MarketplaceCtrl'
        })
        .state('login', {
            url: "/login",
            templateUrl: tempateURL,
            controller: 'LoginCtrl'
        })
        .state('register', {
            url: "/register",
            templateUrl: tempateURL,
            controller: 'RegisterCtrl'
        })
        .state('price', {
            url: "/price",
            templateUrl: tempateURL,
            controller: 'PriceCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});