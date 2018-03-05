myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "Home",
        classis: "active",
        icon:"",
        anchor: "home",
        subnav: []
    }, {
        name: "Products",
        classis: "active",
        anchor: "ecommerce",
        subnav: [{
            name: "Complete Ecommerce Solution",
            classis: "active",
            anchor: "ecommerce",
        },{
            name: "Shopmyway Website",
            classis: "active",
            anchor: "website",
        },{
            name: "Shopmyway Marketing",
            classis: "active",
            anchor: "marketing",
        },{
            name: "Shopmyway Couriers",
            classis: "active",
            anchor: "couriers",
        },{
            name: "Shopmyway Marketplace",
            classis: "active",
            anchor: "marketplace",
        }]
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});