angular.module('todo-sample').controller('todoController',  function TodoController ($scope) {
    $scope.saved = localStorage.getItem('todos');
    $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Sample Task List . Add New task', done: false} ];
    localStorage.setItem('todos', JSON.stringify($scope.todos));
    $scope.addTodo = function() {
        $scope.todos.push({
            text: $scope.todoText,
            done: false
        });
        $scope.todoText = ''; //clear the input after adding
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };


    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo){
            count+= todo.done ? 0 : 1;
        });
        return count;
    };
    $scope.deleteTodo = function (item) {
        var index=$scope.todos.indexOf(item)
        $scope.todos.splice(index,1);
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    }
});