myApp.controller('WebsiteCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("../views/content/website/website.html");
    TemplateService.title = "Website"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
})