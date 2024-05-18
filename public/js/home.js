// Logout JS page
const logged = document.querySelector(".loggedIn");

// Swap logged buttons
async function swapLogged(){
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/')
    }
  } catch (error) {
    alert(error.message);
  }
};

logged.addEventListener('click', swapLogged)