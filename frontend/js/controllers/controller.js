myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/home/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    // .controller('LinksCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    //     $scope.template = TemplateService.getHTML("content/links.html");
    //     TemplateService.title = "Links"; // This is the Title of the Website
    //     $scope.navigation = NavigationService.getNavigation();
    // })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });