myApp.controller('EcommerceCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("../views/content/ecommerce/ecommerce.html");
    TemplateService.title = "Couriers"; //This is the Title of the Website
    TemplateService.backgoundChange = "";
    $scope.navigation = NavigationService.getNavigation();
    $scope.banners = [{
        "image": "../img/ecommerce/ecommerce_bg.png",
        "title": "Introducing - Your Online Business Partner!",
        "subtitle": "With our Complete E-commerce Solution, we guarantee you growth in your online sales",
        "btntext": "Arrange A Call Back"
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