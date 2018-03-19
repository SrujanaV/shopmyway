myApp.controller('WebsiteCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http,$uibModal) {
    $scope.template = TemplateService.getHTML("../views/content/website/website.html");
    TemplateService.title = "Website"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.backgoundChange = "";
    TemplateService.homefooterNone = "";
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
    //data for banner image and content
    $scope.banners = [{
        "image": "img/ecommerce/ecommerce_bg.png",
        "title": "Give Your Brand The Website <br> It Deserves",
        "subtitle": "Choose India's leading E-Commerce website service & <br> grow your brand online!",
        "btntext": "Arrange A Call Back"
    }]
    //data for pagedivision html directive
    $scope.pagedivision = [{
        "image": "icon-Mobile-Optimized-2",
        "title": "Beautiful Mobile-Optimized Website"
    }, {
        "image": "icon-Customization2",
        "title": "Unlimited Customization Options"
    }, {
        "image": "icon-Courier2",
        "title": "Integrated Courier Solution"
    }, {
        "image": "icon-Support2",
        "title": "Complete Business Support"
    }]
    //data for alternatediv html directive    
    $scope.alternatesection = [{
        "image1": "img/website/section1.png",
        "maintitle1": "Make Your Brand Shine With A Stunning E-Commerce Website",
        "subtitle1": "Ensure Your Brand's Success With A Beautiful, Responsive E-Commerce Website",
        "subcontent1": "<p>Design your personalised store with 100+ mobile-responsive themes</p><p>Sell from anywhere with a Facebook store & custom Android/iOS mobile apps</p><p>Manage your online store with a powerful dashboard</p>",
        "image2": "img/website/section2.png",
        "maintitle2": "Create A Truly Unique Website With Endless Customization",
        "subtitle2": "Create A Unique Brand Identity With A Customized Website",
        "subcontent2": "<p>Get extensive website customization services at competitive rates</p><p>Get custom fonts and text & background color of your choice on your website</p><p>Get structural and layout changes made to your website for higher conversions</p><p>Get multiple custom add-on integrations on your website for added punch</p>"
    }, {
        "image1": "img/website/section1.png",
        "maintitle1": "Choose From Multiple Courier Partners & Services",
        "subtitle1": "Run Product Ads On Top Social Media Platforms",
        "subcontent1": "<p>Process orders easily to 15000+ pincodes in one click</p><p>Choose from 6 leading courier service providers</p><p>Use NDR & Return Reduction Service to minimize your return shipments</p><p>Get live shipment tracking for you & your customer via email & SMS</p>",
        "image2": "img/website/section4.png",
        "maintitle2": "Choose From Multiple Courier Partners & Services",
        "subtitle2": "Run Product Ads On Top Social Media Platforms",
        "subcontent2": "<p>Get extensive website customization services at competitive rates</p><p>Get custom fonts and text & background color of your choice on your website</p><p>Get structural and layout changes made to your website for higher conversions</p><p>Get multiple custom add-on integrations on your website for added punch</p>"
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