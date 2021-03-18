import getData from '../utils/getData';

// si le pongo {} al map espera un return sino ya es implicito
const Home = async() => {
	const characters = await getData();
	const view = `
		<div class="Characters">
		${characters.results.map((c) => {
			return `<article class="Character-item">
				<a href="#/${c.id}/">
					<img src="${c.image}" alt="${c.name}"/>
					<h2>${c.name}</h2>
				</a>
			</article>`
		}).join('')}
		</div>
	`;
	return view;
}
export default Home;