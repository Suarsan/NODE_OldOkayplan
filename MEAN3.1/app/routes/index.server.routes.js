//Archivo de enrutado
module.exports = function(app) {
	var index = require('../controllers/index.server.controller'); //Solicitamos el controller
	app.get('/', index.render); //Middleware para hacer peticion get (http)
};