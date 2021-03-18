import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

//las rutas que va tener la aplicacion
const  routes = {
	'/': Home, //el '/' va hacer render de Home
	'/:id': Character,
	'/contact': 'Contact', //va a render de algun elemento
};

//manejador
const router = async () => {
	//vamos empujar nuestro templates al DOM
	const header = null || document.getElementById('header');
	const content = null || document.getElementById('content');
	header.innerHTML = await Header();
	let hash = getHash();
	let route = await resolveRoutes(hash); //await por q puede demorar la funcion
	let render = routes[route] || Error404;
	content.innerHTML = await render();
};

export default router;
