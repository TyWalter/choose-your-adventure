const startNewGame = document.querySelector('.startNewGame');
const characterName = document.querySelector('#charName')

startNewGame.addEventListener('click', async function(){
    // add things to make this snd you home 
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ characterName })
    });
    document.location.replace('/game')
})