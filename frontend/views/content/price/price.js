myApp.controller('PriceCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/price/price.html");
    TemplateService.title = "price"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.backgoundChange = "";
    TemplateService.homefooterNone = "";
    $scope.modalOpen = function () {
        $scope.enquiry = $uibModal.open({
            animation: true,
            templateUrl: "views/modal/enquiry.html",
            scope: $scope,
            size: 'lg',
            // backdropClass: 'back-drop'
        });
        $scope.closeModal = function () {
            $scope.enquiry.close();
        };
    }
})