const loginFormHandler = async (event) => {
  event.preventDefault();

  let uname = document.querySelector('#uname').value;
  let upass = document.querySelector('#upass').value;

  if(uname && upass){
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({uname, upass}),
      headers: {'Content-Type': 'application/json'}
    });
    if(response.ok){
      document.location.replace('/profile');
    } else {
    alert(response.statusText);
    }
  }
}

const signupFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#sname').value;
  const email = document.querySelector('#semail').value;
  const password = document.querySelector('#spass').value;
  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
// maybe not working the way we want 
  .querySelector('#usubmit')
  .addEventListener('submit', loginFormHandler);
document
  .querySelector('#ssubmit')
  .addEventListener('submit', signupFormHandler);