myApp.controller('WebsiteCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("../views/content/website/website.html");
    TemplateService.title = "Website"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
      TemplateService.backgoundChange = "";
      //data for banner image and content
      $scope.banners = [{
        "image": "../img/ecommerce/ecommerce_bg.png",
        "title": "Give Your Brand The Website It Deserves",
        "subtitle": "Choose India's leading E-Commerce website service & grow your brand online!",
        "btntext": "Arrange A Call Back"
    }]
     //data for pagedivision html directive
     $scope.pagedivision=[{
      "image": "../img/couriers/weigh.png",
      "title": "Beautiful Mobile-Optimized Website"
  },{
      "image": "../img/couriers/calendar.png",
      "title": "Unlimited Customization Options"
  },{
      "image": "../img/couriers/code.png",
      "title": "Integrated Courier Solution"
  },{
      "image": "../img/couriers/shipment.png",
      "title": "Complete Business Support"
  }]
  //data for alternatediv html directive    
  $scope.alternatesection=[{
    "image1": "../img/website/section1.png",
    "maintitle1": "Make Your Brand Shine With A Stunning E-Commerce Website",
    "subtitle1":"Ensure Your Brand's Success With A Beautiful, Responsive E-Commerce Website",
    "subcontent1": "<p>Design your personalised store with 100+ mobile-responsive themes</p><p>Sell from anywhere with a Facebook store & custom Android/iOS mobile apps</p><p>Manage your online store with a powerful dashboard</p>",
    "image2": "../img/website/section2.png",
    "maintitle2": "Create A Truly Unique Website With Endless Customization",
    "subtitle2":"Create A Unique Brand Identity With A Customized Website",
    "subcontent2": "<p>Get extensive website customization services at competitive rates</p><p>Get custom fonts and text & background color of your choice on your website</p><p>Get structural and layout changes made to your website for higher conversions</p><p>Get multiple custom add-on integrations on your website for added punch</p>"
},{
  "image1": "../img/website/section1.png",
  "maintitle1": "Choose From Multiple Courier Partners & Services",
  "subtitle1":"Run Product Ads On Top Social Media Platforms",
  "subcontent1": "<p>Process orders easily to 15000+ pincodes in one click</p><p>Choose from 6 leading courier service providers</p><p>Use NDR & Return Reduction Service to minimize your return shipments</p><p>Get live shipment tracking for you & your customer via email & SMS</p>",
  "image2": "../img/website/section4.png",
  "maintitle2": "Choose From Multiple Courier Partners & Services",
  "subtitle2":"Run Product Ads On Top Social Media Platforms",
  "subcontent2": "<p>Get extensive website customization services at competitive rates</p><p>Get custom fonts and text & background color of your choice on your website</p><p>Get structural and layout changes made to your website for higher conversions</p><p>Get multiple custom add-on integrations on your website for added punch</p>"
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