myApp.controller('MarketplaceCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/marketplace/marketplace.html");
    TemplateService.title = "Marketplace"; //This is the Title of the Website
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
        "image": "img/marketplace/marketplace_bg.png",
        "title": "Manage Multiple Marketplaces with ShopMyWay MarketPlace Solutions with your <span class='shop'>Shop</span><span class='myway'>MyWay</span> Solutions",
        "btntext": "Start your free trial"
    }]
    //data for pagedivision html directive
    $scope.pagedivision = [{
        "image": "icon-Order_nventory",
        "title": "Order & Inventory Management.        ",
    }, {
        "image": "icon-Registration",
        "title": "GST complainte Reconciliation & Accounting.",
    }, {
        "image": "icon-Registration",
        "title": "Onboarding Assistance.",
    }, {
        "image": "icon-Registration",
        "title": "Advertise Products on Marketplace.        ",
    }]
    //data for alternatediv html directive    
    $scope.alternatesection = [{
        "image1": "img/marketplace/section1.png",

        "subcontent1": "Manage Multiple marketplaces through single ShopMyWay Dashboard.        ",
        "image2": "img/marketplace/section2.png",

        "subcontent2": "Easy to Manage GST complainte Reconciliation & Accounting through ShopMyWay Marketplace Solutions.        "
    }, {
        "image1": "img/marketplace/section3.png",

        "subcontent1": "Let ShopMyWay experts assist you to get seamless experience of Marketplace.        ",
        "image2": "img/marketplace/section4.png",

        "subcontent2": "Make your Marketplace products stand apart increasing your sales with ShopMyWay Marketplace advertising solutions.        "
    }]
    //data for pricing html directive    
    $scope.pricing = [{
        "name": "standard",
        "price": "₹ 50,000",
        "period": "Month",
        "minper": "Minimum Period 12 months",
        "otp": "Rs 5,99,999 for One Time Payment*",
        "services": [{
            "id": "s1",
            "name": "Ecommerce Website"
        }, {
            "id": "s2",
            "name": "Mobile App Android"
        }, {
            "id": "s3",
            "name": "Design service (Banners)"
        }, {
            "id": "s4",
            "name": "Couriers Solution"
        }, {
            "id": "s5",
            "name": "Advertisement on FB / Google"
        }, {
            "id": "s6",
            "name": "Email & SMS Marketing"
        }, {
            "id": "s7",
            "name": "Social Media Management"
        }, {
            "id": "s8",
            "name": "Marketplace Advertisement"
        }, {
            "id": "s9",
            "name": "Personal Account Manager"
        }]
    }, {
        "name": "Professional",
        "price": "₹ 75,000",
        "period": "Month",
        "minper": "Minimum Period 12 months",
        "otp": "Rs 8,99,999 for One Time Payment*",
        "services": [{
            "id": "p1",
            "name": "Ecommerce Website"
        }, {
            "id": "p2",
            "name": "Mobile App Android"
        }, {
            "id": "p3",
            "name": "Design service (Banners)"
        }, {
            "id": "p4",
            "name": "Couriers Solution"
        }, {
            "id": "p5",
            "name": "Advertisement on FB / Google"
        }, {
            "id": "p6",
            "name": "Email & SMS Marketing"
        }, {
            "id": "p7",
            "name": "Social Media Management"
        }, {
            "id": "p8",
            "name": "Marketplace Advertisement"
        }, {
            "id": "p9",
            "name": "Personal Account Manager"
        }]
    }, {
        "name": "Premium",
        "price": "₹ 1,00,000",
        "period": "Month",
        "minper": "Minimum Period 12 months",
        "otp": "Rs 9,99,999 for One Time Payment*",
        "services": [{
            "id": "pr1",
            "name": "Ecommerce Website"
        }, {
            "id": "pr2",
            "name": "Mobile App Android"
        }, {
            "id": "pr3",
            "name": "Design service (Banners)"
        }, {
            "id": "pr4",
            "name": "Couriers Solution"
        }, {
            "id": "pr5",
            "name": "Advertisement on FB / Google"
        }, {
            "id": "pr6",
            "name": "Email & SMS Marketing"
        }, {
            "id": "pr7",
            "name": "Social Media Management"
        }, {
            "id": "pr8",
            "name": "Marketplace Advertisement"
        }, {
            "id": "pr9",
            "name": "Personal Account Manager"
        }]
    }]
})