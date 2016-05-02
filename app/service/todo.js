angular.module('toDoApp').factory('todoService', function ($http) {

    var todo = {
        model: {
            list:[],
            item: null,

        },
        getTodos: function(){
            
            var promise = $http.get('http://localhost:3000/todos');

            promise.then(function(res){

                todo.model.list = res.data;

            });

            return promise;
            
        },
        
        create: function (todoData) {
            
            $http.post('http://localhost:3000/todo', todoData)
                .then(function(res){
                
                todo.model.list.push(res.data);
                
            });

        },
        update: function (todoData) {

            console.log(todoData);
            
            var id = todoData._id;
            
            return $http.put('http://localhost:3000/todo/'+id, todoData);
                

        },
        remove: function (id) {
            console.log(id);

            return $http.delete('http://localhost:3000/todo/' + id)
                .then(function (res) {

                    angular.forEach(todo.model.list, function (item, i) {

                        if (id === item._id) {
                            todo.model.list.splice(i, 1);
                        }
                    });
                });

        }
    };

    return todo;
});