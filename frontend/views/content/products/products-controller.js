myApp.controller('ProductsCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/products/products.html");
    TemplateService.title = "Manage-Products"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
    ];
    $scope.products = [{
        "ProductName": "Hand made Fan",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    },{
        "ProductName": "Shipment",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    },{
        "ProductName": "Hand made Fan",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    },{
        "ProductName": "Hand made Fan",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    },{
        "ProductName": "Hand made Fan",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    },{
        "ProductName": "Shipment",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    },{
        "ProductName": "Hand made Fan",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    },{
        "ProductName": "Hand made Fan",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    },{
        "ProductName": "Hand made Fan",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    },{
        "ProductName": "Shipment",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    },{
        "ProductName": "Hand made Fan",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    },{
        "ProductName": "Hand made Fan",
        "SubCategory": "Home Decor",
        "Price": "1499",
        "Status": "Enquiry only",
        "QtyLeft": "120",
        "QtySold": "30"
    }]
})