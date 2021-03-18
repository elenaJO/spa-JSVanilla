const resolveRoutes = (route) => {
	if (route.length <= 3) {
		//quiere decir que esta en la ruta principal '/' o en un id de un personaje por que no son mas de 1000
		let validRoute = route === '/' ? route : '/:id';
		return validRoute;
	}
	return `/${route}`; // /about
}

export default resolveRoutes;