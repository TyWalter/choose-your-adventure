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

  let uname = document.querySelector('#uname').value;
  let upass = document.querySelector('#upass').value;

  if(uname && upass){
    const response = await fetch('/api/login', {
      method: 'GET',
      body: JSON.stringify({uname, upass}),
      headers: {'Content-Type': 'application/json'}
    });
    if(response){
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector('#sname').value;
  const email = document.querySelector('#semail').value;
  const password = document.querySelector('#spass').value;

  if (user_name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ user_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#login').addEventListener('submit', loginFormHandler);
document.querySelector('#signup').addEventListener('submit', signupFormHandler);

