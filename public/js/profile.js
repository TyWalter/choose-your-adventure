const startNewGame = document.querySelector('.startNewGame');


startNewGame.addEventListener('click', async function(){
    const characterName = document.querySelector('#charName').value;
    const response = await fetch('/api/users/profile', {
        method: 'POST',
        body: JSON.stringify({ characterName }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(characterName){
        document.location.replace('/game')
    }
})