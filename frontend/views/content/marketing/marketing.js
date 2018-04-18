myApp.controller('MarketingCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/marketing/marketing.html");
    TemplateService.title = "Marketing"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.backgoundChange = "";
    TemplateService.homefooterNone = "";

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
    //data for banner image and content
    $scope.banners = [{
        "image": "img/marketing/marketing_bg.png",
        "title": "Promote and grow your business through<br> online and mobile sales with your <br><span class='shop'>ShopMy</span><span class='myway'>Way</span> Solutions",
        "btntext": "Call for free Business Consultation"
    }]
    //data for pagedivision html directive
    $scope.pagedivision = [{
        "image": "img/marketing/m1.svg",
        "title": "Online Ads Marketing"
    }, {
        "image": "img/marketing/m2.svg",
        "title": "Social Media Management"
    }, {
        "image": "img/marketing/m3.svg",
        "title": "E-Mail And SMS Marketing"
    }, {
        "image": "img/marketing/m4.svg",
        "title": "Advance Search Engine Optimization"
    }]
    //data for alternatediv html directive    
    $scope.alternatesection = [{
        "image1": "img/marketing/banner1.png",
        "subcontent1": "ShopMyWay Solutions are designed to enhance your business presence online and help you to target broader audience.",
        "image2": "img/marketing/banner2.png",
        "subcontent2": "Manage a Unique Social Media presence on Multiple Platforms. "
    }, {
        "image1": "img/marketing/banner3.png",
        "subcontent1": "Enhance your Marketing capabilities with the ShopMyWay Email & SMS marketing Solutions.        ",
        "image2": "img/marketing/banner4.png",
        "subcontent2": "Grow your online presence and reach the right audience with ShopMyWay Advance Search Engine Optimizations."
    }]
})