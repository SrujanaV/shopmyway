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
                name: "Shopmyway Website",
                classis: "active",
                anchor: "website",
            }, {
                name: "Shopmyway Marketing",
                classis: "active",
                anchor: "marketing",
            }, {
                name: "Shopmyway Logistics",
                classis: "active",
                anchor: "couriers",
            }, {
                name: "Shopmyway Marketplace",
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