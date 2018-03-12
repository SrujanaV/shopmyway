myApp.controller('MarketplaceCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("../views/content/marketplace/marketplace.html");
    TemplateService.title = "Marketplace"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
      TemplateService.backgoundChange = "";
      //data for banner image and content
      $scope.banners = [{
        "image": "../img/marketplace/marketplace_bg.png",
        "title": "One Stop Solution For Selling On Marketplaces",
        "subtitle": "Choose India's leading E-Commerce website service & grow your brand online!",
        "btntext": "Start your free trial"
    }]
     //data for pagedivision html directive
     $scope.pagedivision=[{
      "image": "../img/couriers/weigh.png",
      "title": "Order And Inventory Management"
  },{
      "image": "../img/couriers/calendar.png",
      "title": "Reconciliation & Accounting Compliance"
  },{
      "image": "../img/couriers/code.png",
      "title": "Listing & Registration Assistance"
  },{
      "image": "../img/couriers/shipment.png",
      "title": "Advertise Products On Marketplaces."
  }]
  //data for alternatediv html directive    
  $scope.alternatesection=[{
    "image1": "../img/marketplace/section1.png",
    "maintitle1": "Process Orders From Multiple Marketplaces And Your Website",
    "subtitle1":"Manage Orders Of All Marketplaces In A Single Dashboard",
    "subcontent1": "<p>Process all orders with Ease with Centralized order management and bulk order processing</p><p>Sync Inventory across channels with real-time syncing and centralized inventory update</p><p>Generate Shipping Labels and Manifests and deliver using Integrated Couriers</p>",
    "image2": "../img/marketplace/section2.png",
    "maintitle2": "The Most Advanced Marketplace Reconciliation Dashboard",
    "subtitle2":"Get Paid Right By Keeping A Track Of Your Reconciliations",
    "subcontent2": "<p>Get Automatic Reconciliation reports with Minimal Human intervention</p><p>Track your Reconciliation by checking penalties and Claim unpaid orders</p><p>Manage your account with integration with accounting softwares like Tally & Busy</p>"
},{
  "image1": "../img/marketplace/section3.png",
  "maintitle1": "Get Straight To Growing Your Business",
  "subtitle1":"Directly Start Selling On Marketplaces With Our Assistance",
  "subcontent1": "<p>Get registered on Marketplaces with brand approval and necessary documentation processing</p><p>Provide basic product details and get listed on Marketplaces without hassle</p><p>Get Search engine optimized content writing for better organic visibility</p>",
  "image2": "../img/marketplace/section4.png",
  "maintitle2": "Get More Sales With Marketplace Ads",
  "subtitle2":"Boost Your Sales With Targeted Product Ads",
  "subcontent2": "<p>Advertise your products with Sponsored ads on top Marketplaces.</p><p>Increase your sales with better visibility for as low as Rs 10,000/-</p><p>Get Free consultation on Marketplace promotions and listing</p>"
}]
//data for pricing html directive    
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