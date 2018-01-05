myApp.controller('RegisterCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/register/register.html");
    TemplateService.title = "Register"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
})