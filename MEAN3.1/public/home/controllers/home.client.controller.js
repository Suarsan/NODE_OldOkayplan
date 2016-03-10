angular.module('home').controller('homeController', ['$scope','Authentication',
	function($scope, Authentication) {
		//Guardamos en el scope el campo username del modelo user de la autentificacion para mostrarlo despues en el perfil
		$scope.name = Authentication.user.username; 
	}
]);