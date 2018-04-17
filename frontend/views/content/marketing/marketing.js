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
        "title": "Promote and grow your business through<br> online and mobile sales with your <span class='shop'>Shop</span><span class='myway'>MyWay</span> Solutions",
        "btntext": "Start your free trial"
    }]
    //data for pagedivision html directive
    $scope.pagedivision = [{
        "image": "icon-Social-media",
        "title": "Online Ads Marketing"
    }, {
        "image": "icon-Social-media",
        "title": "Social Media Management"
    }, {
        "image": "icon-Email-sms",
        "title": "E-Mail And SMS Marketing"
    }, {
        "image": "icon-Seo",
        "title": "Advance Search Engine Optimization"
    }]
    //data for alternatediv html directive    
    $scope.alternatesection = [{
        "image1": "img/marketing/mac1.png",
        "subcontent1": "ShopMyWay Solutions are designed to enhance your business presence online and help you to target broader audience.",
        "image2": "img/marketing/mac2.png",
        "subcontent2": "Manage a Unique Social Media presence on Multiple Platforms. "
    }, {
        "image1": "img/marketing/mac1.png",
        "subcontent1": "Enhance your Marketing capabilities with the ShopMyWay Email & SMS marketing Solutions.        ",
        "image2": "img/marketing/mac2.png",
        "subcontent2": "Grow your online presence and reach the right audience with ShopMyWay Advance Search Engine Optimizations."
    }]
})