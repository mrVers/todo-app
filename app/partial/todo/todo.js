angular.module('toDoApp').controller('TodoCtrl', function ($scope, todoService) {

    $scope.todos = todoService.model.list;

    $scope.addTodo = function () {
        var newTodo = {
            title: $scope.todo.title
        };

        todoService.create(newTodo);

        $scope.todo.title = '';

    };

    $scope.getPrettyTime = function (date) {
        return moment(date).fromNow();
    };

    $scope.removeTodo = function (id) {

        todoService.remove(id);

    };

    $scope.setActive = function (todo) {

        if (todo.active) {
            todo.active = 0;
        } else {
            todo.active = 1;
        }

        todoService.update(todo);

    };
    
        $scope.updateTitle = function (todo, data) {

            var NewTitle = {
                title: data,
                _id: todo._id          
            };
            
        todoService.update(NewTitle);

    };


});