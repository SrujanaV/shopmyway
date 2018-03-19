myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    TemplateService.backgoundChange = "backgoundChange";
    TemplateService.homefooterNone = "homefooterNone";
    console.log();
    $scope.navigation = NavigationService.getNavigation();
    $scope.modalOpen = function () {
        console.log("inside modal");
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
        //hide upper footer section
        // document.getElementById('upperFooter').style.display = 'none';
})