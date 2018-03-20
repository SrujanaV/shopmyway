myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    TemplateService.backgoundChange = "backgoundChange";
    TemplateService.homefooterNone = "homefooterNone";
    $scope.navigation = NavigationService.getNavigation();

    //enquiry form modal
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

    //data is saved and enquiry modal is closed and thank you modal is shown with timeout
    $scope.enquirySubmit = function (enquiry) {
        NavigationService.saveEnquiry(enquiry, function (data) {

            if (data.data.value) {
                $scope.enquiry.close();
                $scope.thankyou = $uibModal.open({
                    animation: true,
                    templateUrl: 'views/modal/thanks.html',
                    scope: $scope,
                    size: 'sm'
                });
                $timeout(function () {
                    $scope.thankyou.close();
                }, 1500);

            }

        })
    }
})