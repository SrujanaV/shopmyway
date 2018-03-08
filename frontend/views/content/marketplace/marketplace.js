myApp.controller('MarketplaceCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("../views/content/marketplace/marketplace.html");
    TemplateService.title = "Marketplace"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
      TemplateService.backgoundChange = "";
})