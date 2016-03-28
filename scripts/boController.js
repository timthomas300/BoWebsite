var myApp = angular.module('boModule', ['ui.bootstrap']);

myApp.controller('boController', ['$scope', function ($scope) {
    $scope.services = [
        {
            image: "img/womenscuts.jpg",
            name: "Women's Cuts",
            description: "lkajsdf lasdkjf lakjf alsekdjf ;lasekfj ;alssfjjlaks .,sdkgf sl;drkmgf nls;kjdg"
        },
        {
            image: "img/mens cuts.jpg",
            name: "Men's Cuts",
            description: "lkajsdf lasdkjf lakjf alsekdjf ;lasekfj ;alssfjjlaks .,sdkgf sl;drkmgf nls;kjdg"
        },
        {
            image: "img/colorworks.jpg",
            name: "Hair Works",
            description: "lkajsdf lasdkjf lakjf alsekdjf ;lasekfj ;alssfjjlaks .,sdkgf sl;drkmgf nls;kjdg"
        },
        //{
        //    image: "img/randomhairpic.jpg",
        //    name: "Hair Treatments",
        //    description: "lkajsdf lasdkjf lakjf alsekdjf ;lasekfj ;alssfjjlaks .,sdkgf sl;drkmgf nls;kjdg"
        //},
        //{
        //    image: "img/randomhairpic.jpg",
        //    name: "Dimensional Color",
        //    description: "lkajsdf lasdkjf lakjf alsekdjf ;lasekfj ;alssfjjlaks .,sdkgf sl;drkmgf nls;kjdg"
        //},
        //{
        //    image: "img/randomhairpic.jpg",
        //    name: "Free Conversations",
        //    description: "lkajsdf lasdkjf lakjf alsekdjf ;lasekfj ;alssfjjlaks .,sdkgf sl;drkmgf nls;kjdg"
        //}
    ];
}]);