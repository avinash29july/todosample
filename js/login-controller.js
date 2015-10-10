/**
 * Created by AVINASH on 10/10/2015.
 */
todoApp.controller('loginController',  function ($scope,$location) {
    $scope.SignIn = function() {
        localStorage.setItem('Uname','MRCLIENT'); // User name added to local storage
        localStorage.setItem('Upass','Admin123'); // Password name added to local storage
        var UN = localStorage.getItem('Uname');
        var UP = localStorage.getItem('Upass');

        if($scope.username === UN && $scope.password===UP){
            $scope.username =UN;
            $scope.password=UP;
            $location.path('/todo');


        }else{
            $('span.error').text("Invalid Credential")
            $scope.username = '';
            $scope.password = '';
        }
    };
});