myApp.controller('headerCtrl', function ($scope, TemplateService, $uibModal, NavigationService, $timeout) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $scope.getslide = "menu-out";
    // $scope.getnav = function () {
    //     if ($scope.getslide == "menu-in") {
    //         $scope.getslide = "menu-out";
    //         $scope.onebar = "";
    //         $scope.secondbar = "";
    //         $scope.thirdbar = "";
    //     } else {
    //         $scope.getslide = "menu-in";
    //         $scope.onebar = "firstbar";
    //         $scope.secondbar = "secondbar";
    //         $scope.thirdbar = "thirdbar";
    //     }
    // };

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

    $scope.enquirySubmit = function (enquiry) {
        console.log(enquiry);
        NavigationService.saveEnquiry(enquiry, function (data) {
            console.log("in franchise", data);

            if (data.data.value) {
                $scope.enquiry.close();
                $scope.thankyou = $uibModal.open({
                    animation: true,
                    templateUrl: 'views/modal/thanks.html',
                    scope: $scope,
                    size: 'sm'
                });
                $timeout(function () {
                    console.log("modal close");
                    $scope.thankyou.close();
                }, 1500);

            }

        })
    }

    //for header scroll scss change
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".navbar").addClass("background-black");

        } else {
            $(".navbar").removeClass("background-black");
        }
    });
});