import { getInsult } from './modules/get.js';

const insultButton = document.querySelector('#insult-button');
const insultElem = document.querySelector('#insult');
const playElem = document.querySelector('#play');

function showInsult(insultObj) {
	console.log('insultObj:', insultObj);
	insultElem.innerHTML = insultObj.insult;
	playElem.innerHTML = ' - ' + insultObj.play;
}

insultButton.addEventListener('click', async function() {
	//Göra anrop mot Shakespeare API med fetch
	//När jag får ett svar visa för användaren
    let insult = await getInsult();
    showInsult(insult);
});