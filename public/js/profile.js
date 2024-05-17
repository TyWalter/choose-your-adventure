const startNewGame = document.querySelector('.startNewGame');
const characterName = document.querySelector('#charName').value;

startNewGame.addEventListener('click', async function(){
    // add things to make this send you home 
    const response = await fetch('/api/users/profile', {
        method: 'POST',
        body: JSON.stringify({ characterName })
    });
    document.location.replace('/game')
})