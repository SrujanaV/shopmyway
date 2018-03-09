myApp.controller('MarketingCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("../views/content/marketing/marketing.html");
    TemplateService.title = "Marketing"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
      TemplateService.backgoundChange = "";
      //data for banner image and content
      $scope.banners = [{
        "image": "../img/marketing/marketing_bg.png",
        "title": "Grow Your Online Sales!",
        "subtitle": "We understand your business and provide you ROI guaranteed digital marketing services",
        "btntext": "Start your free trial"
    }]
    //data for pagedivision html directive
    $scope.pagedivision=[{
      "image": "../img/couriers/weigh.png",
      "title": "Online Ads Marketing"
  },{
      "image": "../img/couriers/calendar.png",
      "title": "Social Media Management"
  },{
      "image": "../img/couriers/code.png",
      "title": "E-Mail And SMS Marketing"
  },{
      "image": "../img/couriers/shipment.png",
      "title": "SEO Optimization"
  }]
  //data for alternatediv html directive    
  $scope.alternatesection=[{
    "image1": "../img/couriers/mac.png",
    "maintitle1": "Choose From Multiple Courier Partners & Services",
    "subtitle1":"Run Product Ads On Top Social Media Platforms",
    "sub1content1": "Run Product Ads across Facebook and Instagram with Social Media Advertising.",
    "sub1content2": "Attract the right audience on your website with great Ad relevancy and Accurate Targeting.",
    "sub1content3": "Get Real-time Report of your every campaign's ROI with Ad Analytics.",
    "image2": "../img/couriers/mac.png",
    "maintitle2": "Choose From Multiple Courier Partners & Services",
    "subtitle2":"Run Product Ads On Top Social Media Platforms",
    "sub2content1": "Run Product Ads across Facebook and Instagram with Social Media Advertising.",
    "sub2content2": "Attract the right audience on your website with great Ad relevancy and Accurate Targeting.",
    "sub2content3": "Get Real-time Report of your every campaign's ROI with Ad Analytics."
},{
  "image1": "../img/couriers/mac.png",
  "maintitle1": "Choose From Multiple Courier Partners & Services",
  "subtitle1":"Run Product Ads On Top Social Media Platforms",
  "sub1content1": "Run Product Ads across Facebook and Instagram with Social Media Advertising.",
  "sub1content2": "Attract the right audience on your website with great Ad relevancy and Accurate Targeting.",
  "sub1content3": "Get Real-time Report of your every campaign's ROI with Ad Analytics.",
  "image2": "../img/couriers/mac.png",
  "maintitle2": "Choose From Multiple Courier Partners & Services",
  "subtitle2":"Run Product Ads On Top Social Media Platforms",
  "sub2content1": "Run Product Ads across Facebook and Instagram with Social Media Advertising.",
  "sub2content2": "Attract the right audience on your website with great Ad relevancy and Accurate Targeting.",
  "sub2content3": "Get Real-time Report of your every campaign's ROI with Ad Analytics."
}]
})