var app = angular.module('noteApp',[]);

app.controller('noteController', function($scope){
		
		$scope.todos = [{task: 'Wash clothes', done: false},
						{task: 'Iron Clothes', done: false},
						{task: 'Learn AngularJS', done: false}
						];
		
		$scope.getTotalTodos = function(){
			  return $scope.todos.length;
			}
		
		$scope.AddTodo = function(){
			  $scope.todos.push({task: $scope.todoTask, done: false});
			  $scope.todoTask = '';
			}
			
		$scope.remove = function(){
			  $scope.todos = _.filter($scope.todos, function(todo){
				  return !todo.done;											 
				});
			}
			
		$scope.remaining = function(){
			  $scope.remtodos = _.filter($scope.todos, function(todo){
				  return !todo.done;											 
				});
			  $scope.remainingTasks = $scope.remtodos.length;
			  return $scope.remainingTasks;
			}
			
	});