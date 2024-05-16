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

    if(response){
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }

  window.location.href = "/profile"
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const sname = document.querySelector('#sname').value;
  const semail = document.querySelector('#semail').value;
  const spass = document.querySelector('#spass').value;

  if (sname && semail && spass) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ sname, semail, spass }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#login').addEventListener('submit', loginFormHandler);
document.querySelector('#signup').addEventListener('submit', signupFormHandler);

