myApp.controller('MarketingCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("../views/content/marketing/marketing.html");
    TemplateService.title = "Marketing"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
      TemplateService.backgoundChange = "";
      TemplateService.homefooterNone = "";
      //data for banner image and content
      $scope.banners = [{
        "image": "../img/marketing/marketing_bg.png",
        "title": "Grow Your Online Sales!",
        "subtitle": "We understand your business <br> and provide you ROI guaranteed digital marketing services",
        "btntext": "Start your free trial"
    }]
    //data for pagedivision html directive
    $scope.pagedivision=[{
      "image": "icon-Social-media",
      "title": "Online Ads Marketing"
  },{
      "image": "icon-Social-media",
      "title": "Social Media Management"
  },{
      "image": "icon-Email-sms",
      "title": "E-Mail And SMS Marketing"
  },{
      "image": "icon-Seo",
      "title": "SEO Optimization"
  }]
  //data for alternatediv html directive    
  $scope.alternatesection=[{
    "image1": "../img/marketing/mac1.png",
    "maintitle1": "Reach Broader Audiences With Online Ads Marketing",
    "subtitle1":"Run Product Ads On Top Social Media Platforms",
    "subcontent1": "<p>Run Product Ads across Facebook and Instagram with Social Media Advertising.</p><p>Attract the right audience on your website with great Ad relevancy and Accurate Targeting</p> <p>Get Real-time Report of your every campaign's ROI with Ad Analytics</p>",
    "image2": "../img/marketing/mac2.png",
    "maintitle2": "Build Your Brand Online With Social Media Management",
    "subtitle2":"Manage Brand Presence Across Multiple Social Media Channels",
    "subcontent2": "<p>Develop a powerful suite of Followers with our effective brand positioning strategy</p><p>Engross your visitors with powerful social media content & high-quality visuals</p><p>Analyze performance metrics to analyze your social media performance</p>"
},{
  "image1": "../img/marketing/mac1.png",
  "maintitle1": "Ensure Constant Customer-Interaction With SMS And Email Marketing",
  "subtitle1":"Maximize Customer Engagement With Effective Email & SMS Campaigns",
  "subcontent1": "<p>Never lose out on consistent traffic with weekly/Monthly E-mail and SMS campaigns</p><p>Set Custom triggers and events to deliver E-mails and SMS'es for quicker conversions</p><p>Use Push notifications & Pop-ups to promote latest products and offers</p>",
  "image2": "../img/marketing/mac2.png",
  "maintitle2": "Increase Your Website Traffic With SEO",
  "subtitle2":"Optimize Your Site's Online Presence For Improved Traffic & Discovery",
  "subcontent2": "<p>Improve relevant organic traffic with our Site Performance, Security and Server analysis</p><p>Implement best on-site SEO practices with Optimized Content, URLs, and Images</p><p>Boost your Referral traffic with Backlink analysis,Visibility optimization and Domain Referrals</p>"
}]
})