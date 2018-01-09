myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "Home",
        classis: "active",
        icon:"",
        anchor: "home",
    }, {
        name: "Links",
        classis: "active",
        anchor: "links",
        subnav: []
    },{
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