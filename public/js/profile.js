const startNewGame = document.querySelector('.startNewGame');


startNewGame.addEventListener('click', async function(){
    const characterName = document.querySelector('#charName').value;
    // add things to make this send you home 
    const response = await fetch('/api/users/profile', {
        method: 'POST',
        body: JSON.stringify({ characterName }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    document.location.replace('/game')
})