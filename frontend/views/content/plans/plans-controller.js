myApp.controller('PlansCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/plans/plans.html");
    TemplateService.title = "Plan"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
})