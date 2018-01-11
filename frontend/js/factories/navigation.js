myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "Website",
        classis: "active",
        icon:"",
        anchor: "home",
    }, {
        name: "Marketing",
        classis: "active",
        anchor: "links",
        subnav: []
    },{
        name: "Couriers",
        classis: "active",
        anchor: "links",
        subnav: []
    },{
        name: "Marketplace",
        classis: "active",
        anchor: "links",
        subnav: []
    },
    {
        name: "Manage-Products",
        classis: "active",
        anchor: "products",
        subnav: []
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});