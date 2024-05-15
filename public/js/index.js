// when we start the game it takes us to profiel 
// we click new game then it unhide the form to create a character when you click to create character ti starts the game

const startGameButton = document.querySelector('#submitNewGame');
const characterButton = document.querySelector('#submitNewCharacter');
const characterForm = document.querySelector('#character-Name');

characterForm.style.display = 'none';

startGameButton.addEventListener('click', function() {
    characterForm.style.display = 'block';
});
