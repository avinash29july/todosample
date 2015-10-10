/**
 * Created by AVINASH on 09/10/2015.
 */
var todoApp = angular.module('todo-sample', ['ui.router','ngAnimate','ui.bootstrap']);

todoApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('home', {
            url: '/login',
            templateUrl: 'signup.html',
            controller: 'loginController'
        }).state('todo', {
            url: '/todo',
            templateUrl: 'todolist.html',
            controller: 'todoController'
        });

});