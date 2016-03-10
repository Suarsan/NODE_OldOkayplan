// Invocar modo JavaScript 'strict'
'use strict';

// Crear un nuevo método controller 'render'
exports.render = function(req, res) {
	//Si el usuario está ya logueado accede a index, si no redirecciona a signin para hacer login
	if (!req.user) {
		//Redirecciona a la pagina para hacer login
		return res.redirect('/signin');
	} else{
		//El usuario estaba logueado en la sesion asique accede a index directamente
		// Usar el objeto 'response' para renderizar la view 'index' con un 'title' y propiedades 'userFullName'
		res.render('index', {
		title: 'Home',
		user: JSON.stringify(req.user)
		});
	}
};