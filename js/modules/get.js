export async function getInsult() {
	const url = 'https://shakespeare-insults-generator.herokuapp.com/getInsult';

	let response = await fetch(url);
	let data = await response.json();

	return await data;
}