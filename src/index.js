import router from './routes';

//va a escuchar a carga de la pagina
window.addEventListener('load', router);

//escuchar las rutas
window.addEventListener('hashchange', router);