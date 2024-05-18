const loginFormHandler = async (event) => {
  event.preventDefault();
  const uname = document.querySelector('#uname').value;
  const upass = document.querySelector('#upass').value;
  if (uname && upass) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ uname, upass }),
      headers: { 'Content-Type': 'application/json' }
    });
    if(response.ok){
      document.location.replace('/profile');
    } else {
      alert("Incorrect username or password, try again!");
    }
  };
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  const sname = document.querySelector('#sname').value;
  const semail = document.querySelector('#semail').value;
  const spass = document.querySelector('#spass').value;
  if (sname && isValidEmail(semail) && spass) {
    try {
      const nameFetch = await fetch(`/api/users/${sname}`, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (nameFetch.ok) {
        throw new Error("Username is already in use, enter a different username");
      };
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ sname, semail, spass }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        throw new Error("Email is already in use, enter a different email");
      }
    } catch (error) {
      alert(error.message);
    }
  }
};

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector('#login').addEventListener('submit', loginFormHandler);
document.querySelector('#signup').addEventListener('submit', signupFormHandler);