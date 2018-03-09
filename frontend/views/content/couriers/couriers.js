myApp.controller('CouriersCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("../views/content/couriers/couriers.html");
    TemplateService.title = "Couriers"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.backgoundChange = "";
    $scope.banners = [{
        "image": "../img/couriers/couriers_bg.jpg",
        "title": "Simplified Courier Solution For Your Business!",
        "subtitle": "Manage & send all your e-commerce shipments at a discounted rate with an easy-to-use dashboard.",
        "btntext": "Start your free trial"
    }]
    $scope.couriers=[{
        "image": "../img/couriers/weigh.png",
        "title": "Compare Prices",
        "subtitle": "Provide your product details and Compare prices of the courier partner"
    },{
        "image": "../img/couriers/calendar.png",
        "title": "Schedule Pickup",
        "subtitle": "Choose the Courier partner that best fits your expected rate and schedule the pickup"
    },{
        "image": "../img/couriers/code.png",
        "title": "Print Shipping Label",
        "subtitle": "Print necessary invoices and wait for the Pickup by courier guy to happen before the Daily Cutoff time"
    },{
        "image": "../img/couriers/shipment.png",
        "title": "Handover Shipments",
        "subtitle": "Handover the shipments & Stay updated about the shipping status"
    }]
    $scope.pricing = [{
        "name": "standard",
        "price": "₹ 50,000",
        "period": "Month",
        "minper": "Minimum Period 12 months",
        "otp": "Rs 5,99,999 for One Time Payment*",
        "services": ["Ecommerce Website", "Mobile App Android", "Design service (Banners)", "Couriers Solution", "Advertisement on FB / Google", "Email & SMS Marketing", "Social Media Management", "Marketplace Advertisement", "Personal Account Manager"]
    }, {
        "name": "Professional",
        "price": "₹ 75,000",
        "period": "Month",
        "minper": "Minimum Period 12 months",
        "otp": "Rs 8,99,999 for One Time Payment*",
        "services": ["Ecommerce Website", "Mobile App Android + iOS", "Design service (Banners)", "Couriers Solution", "Advertisement on FB / Google", "Email & SMS Marketing", "Social Media Management", "Marketplace Advertisement", "Personal Account Manager"]
    }, {
        "name": "Premium",
        "price": "₹ 1,00,000",
        "period": "Month",
        "minper": "Minimum Period 12 months",
        "otp": "Rs 9,99,999 for One Time Payment*",
        "services": ["Ecommerce Website", "Mobile App Android + iOS", "Design service (Banners)", "Couriers Solution", "Advertisement on FB / Google", "Email & SMS Marketing", "Social Media Management", "Marketplace Advertisement", "Personal Account Manager"]
    }]
})