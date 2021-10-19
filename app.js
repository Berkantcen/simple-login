const userDatabase = [
  {
    username: 'berkant',
    password: '123456',
  },
  {
    username: 'ipek',
    password: '123456',
  },
  {
    username: 'tolga',
    password: '123456',
  },
  {
    username: 'cemal',
    password: '123456',
  },
];

// DOM ELEMENTS
const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('.login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.querySelector('.message');
const loginSuccess = document.querySelector('.login-true');

loginBtn.addEventListener('click', function (event) {
  let username = usernameInput.value;
  let password = passwordInput.value;

  // Empty field handling
  if (username === '' || password === '') {
    errorMessage.classList.add('active');
  }
  //   Other outcomes
  loginProcess(username, password);
  event.preventDefault();
});

//  FUNCTION

function isUserValid(username, password) {
  for (let i = 0; i < userDatabase.length; i++) {
    if (
      username === userDatabase[i].username &&
      password === userDatabase[i].password
    ) {
      return true;
    }
  }
  return false;
}

function loginProcess(username, password) {
  if (isUserValid(username, password)) {
    loginForm.classList.remove('active');
    loginSuccess.innerHTML = `
        <h1>Welcome <span class="text-primary">${username} </span></h1>
        <h2>Succesfull Login </h2>
        <p>Enjoy the content of our site</p>
        <a href="" class="return-start">Return</a>
    `;
    loginSuccess.classList.add('active');
  } else {
    errorMessage.classList.add('active');
  }
}

// Return Starting State

const returnStart = document.querySelector('.return-start');

returnStart.addEventListener('click', function (e) {
  loginSuccess.classList.remove('active');
  loginForm.classList.add('active');
});
