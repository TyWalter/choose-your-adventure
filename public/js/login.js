const loginFormHandler = async (event) => {
  event.preventDefault();
  
  const uname = document.querySelector('#uname').value;
  const upass = document.querySelector('#upass').value;
  
  if (uname && upass) {
      const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ user_name: uname, password: upass }),
          headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
          document.location.replace('/');
      } else {
          alert('Login failed. Please check your username and password.');
      }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#sname').value;
  const email = document.querySelector('#semail').value;
  const password = document.querySelector('#spass').value;

  if (name && email && password) {
      const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ user_name: name, email, password }),
          headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
          document.location.replace('/profile');
      } else {
          alert('Signup failed. Please try again.');
      }
  }
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);

