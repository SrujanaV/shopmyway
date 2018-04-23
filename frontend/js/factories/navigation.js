myApp.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        icon: "",
        anchor: "home",
        subnav: []
    }, {
        name: "Solutions",
        classis: "active",
        // anchor: "ecommerce",
        subnav: [
            //     {
            //     name: "Complete Ecommerce Solution",
            //     classis: "active",
            //     anchor: "ecommerce",
            // }, 
            {
                name: "ShopMyWay Website",
                classis: "active",
                anchor: "website",
            }, {
                name: "ShopMyWay Marketing",
                classis: "active",
                anchor: "marketing",
            },
            {
                name: "ShopMyWay Logistics",
                classis: "active",
                anchor: "couriers",
            }, {
                name: "ShopMyWay Marketplace",
                classis: "active",
                anchor: "marketplace",
            }
        ]
    }, {
        name: "Pricing Plan",
        classis: "active",
        icon: "",
        anchor: "price",
        subnav: []
    }, {
        name: "About Us",
        classis: "active",
        icon: "",
        anchor: "about-us",
        subnav: []
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
        saveEnquiry: function (data, callback) {
            $http({
                url: adminurl + 'Enquiry/save',
                method: 'POST',
                data: data,
                withCredentials: false
            }).then(callback);
        }
    };
});