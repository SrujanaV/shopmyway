myApp.controller('ProductsCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/products/products.html");
    TemplateService.title = "Manage-Products"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });
    $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
      ];
})