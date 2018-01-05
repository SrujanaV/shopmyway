myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home",
    }, {
        name: "Links",
        classis: "active",
        anchor: "links",
        subnav: []
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});