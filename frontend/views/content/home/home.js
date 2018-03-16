myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    TemplateService.backgoundChange = "backgoundChange";
    TemplateService.homefooterNone = "homefooterNone";
    console.log();
    $scope.navigation = NavigationService.getNavigation();
    
        //hide upper footer section
        // document.getElementById('upperFooter').style.display = 'none';
})