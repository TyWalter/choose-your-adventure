// Start new game with new character
const characterCreator = async (event) => {
	event.preventDefault();
	const charName = document.querySelector('#charName').value;
	const characterName = charName.toLowerCase();
	if (characterName) {
		try {
      // This was for character unique creation
      // const nameFetch = await fetch(`/api/users/profile/${characterName}`, {
      //   headers: { 'Content-Type': 'application/json' },
      // });
      // if (nameFetch.ok) {
      //   throw new Error(`${characterName}'s story has already ended, choose a new adventurer!`);
      // };
      const response = await fetch('/api/users/profile', {
        method: 'POST',
        body: JSON.stringify({ characterName }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response) {
        document.location.replace('/game');
      }
    } catch (error) {
      alert(error.message);
    }
	}
};

document.querySelector('#startNewGame').addEventListener('submit', characterCreator);