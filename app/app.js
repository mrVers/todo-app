angular.module('toDoApp', ['ui.bootstrap','ui.router','ngAnimate', 'xeditable']);

angular.module('toDoApp').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('todo', {
        url: '/todo',
        templateUrl: 'partial/todo/todo.html',
        controller: 'TodoCtrl',
        resolve: {
            todos:function(todoService){
                
                return todoService.getTodos();
                
            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/todo');

});



angular.module('toDoApp').run(function($rootScope, editableOptions) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'

});

