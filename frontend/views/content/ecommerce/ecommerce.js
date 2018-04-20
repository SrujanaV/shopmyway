myApp.controller('EcommerceCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/ecommerce/ecommerce.html");
    TemplateService.title = "Ecommerce"; //This is the Title of the Website
    TemplateService.backgoundChange = "";
    TemplateService.homefooterNone = "";
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
    $scope.tab1 = true;
    $scope.tabset = function (tab) {
        if (tab == 'tab1') {
            $scope.tab1 = true;
            $scope.tab2 = false;
            $scope.tab3 = false;
        } else if (tab == 'tab2') {
            $scope.tab1 = false;
            $scope.tab2 = true;
            $scope.tab3 = false;
        } else if (tab == 'tab3') {
            $scope.tab1 = false;
            $scope.tab2 = false;
            $scope.tab3 = true;
        }
    }
    $scope.tab4 = true;
    $scope.tabset1 = function (tab) {
        if (tab == 'tab4') {
            $scope.tab4 = true;
            $scope.tab5 = false;
            $scope.tab6 = false;
        } else if (tab == 'tab5') {
            $scope.tab4 = false;
            $scope.tab5 = true;
            $scope.tab6 = false;
        } else if (tab == 'tab6') {
            $scope.tab4 = false;
            $scope.tab5 = false;
            $scope.tab6 = true;
        }
    }
    $scope.tab7 = true;
    $scope.tabset2 = function (tab) {
        if (tab == 'tab7') {
            $scope.tab7 = true;
            $scope.tab8 = false;
            $scope.tab9 = false;
        } else if (tab == 'tab8') {
            $scope.tab7 = false;
            $scope.tab8 = true;
            $scope.tab9 = false;
        } else if (tab == 'tab9') {
            $scope.tab7 = false;
            $scope.tab8 = false;
            $scope.tab9 = true;
        }
    }
    $scope.tab10 = true;
    $scope.tabset3 = function (tab) {
        if (tab == 'tab10') {
            $scope.tab10 = true;
            $scope.tab11 = false;
            $scope.tab12 = false;
        } else if (tab == 'tab11') {
            $scope.tab10 = false;
            $scope.tab11 = true;
            $scope.tab12 = false;
        } else if (tab == 'tab12') {
            $scope.tab10 = false;
            $scope.tab11 = false;
            $scope.tab12 = true;
        }
    }

    $scope.banners = [{
        "image": "img/ecommerce/ecommerce_bg.jpg",
        "title": "Introducing - Your Online <br> Business Partner!",
        "subtitle": "With our Complete E-commerce Solution, we guarantee you growth in your online sales!",
        "btntext": "Arrange A Call Back"
    }]
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