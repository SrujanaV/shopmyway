myApp.controller('MarketingCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("../views/content/marketing/marketing.html");
    TemplateService.title = "Marketing"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
      TemplateService.backgoundChange = "";
})