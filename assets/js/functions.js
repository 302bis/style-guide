var styleguide = angular.module("styleguide",[]);

styleguide.controller("con",function($scope){
$scope.clase = "unactive";
    $scope.changeClase = function(){
        if ($scope.clase === "unactive")
            $scope.clase = "active";
         else
            $scope.clase = "unactive";
    };
});
