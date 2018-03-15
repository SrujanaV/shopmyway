myApp.controller('headerCtrl', function ($scope, TemplateService, $uibModal) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $scope.getslide = "menu-out";
    $scope.getnav = function () {
        if ($scope.getslide == "menu-in") {
            $scope.getslide = "menu-out";
            $scope.onebar = "";
            $scope.secondbar = "";
            $scope.thirdbar = "";
        } else {
            $scope.getslide = "menu-in";
            $scope.onebar = "firstbar";
            $scope.secondbar = "secondbar";
            $scope.thirdbar = "thirdbar";
        }
    };

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
});