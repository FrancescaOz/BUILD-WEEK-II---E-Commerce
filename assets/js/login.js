// VARIABLES
var email;
var password;
var btnIn;
var username;
var list = [];
var exist = false;
var errName;
var errSurname;
var errEmail;
var errUser;
var errPass;

var regexPassword = /^[A-Za-z0-9!#$%&@*?]{8,100}$/;
var regexUser = /^[\d\w-._]{3,16}$/;

// ON LOAD
window.addEventListener("DOMContentLoaded", init);

function init() {
    btnIn = document.getElementById('btnIn');
    firstName = document.getElementById('name');
    surname = document.getElementById('surname');
    email = document.getElementById('email');
    password = document.getElementById('password');
    username = document.getElementById('username');
    errName = document.getElementById('errName');
    errSurname = document.getElementById('errSurname');
    errEmail = document.getElementById('errEmail');
    errUser = document.getElementById('errUser');
    errPass = document.getElementById('errPass');

    eventHandler();
}

// Event HANDLER
function eventHandler() {
    btnIn.addEventListener('click', function () {
        // RICHIAMO VALIDATION
        validation();

    });
}

// FUNCTION VALIDATION
function validation() {

    if (!regexPassword.test(password.value)) {
        errPass.innerHTML = 'La password deve contenere almeno 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale';

    } else {
        errPass.innerHTML = '';
    };
    if (!regexUser.test(username.value)) {
        errUser.innerHTML = 'Insert your correct username';

    } else {
        errUser.innerHTML = '';
    };

    if (regexPassword.test(password.value) && regexUser.test(username.value)) {
        // RICHIAMO EXISTENCE
        existence();

    }

}

// FUNCTION EXISTENCE USERNAME AND EMAIL
async function existence() {
    let response = await fetch("http://localhost:3000/users")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            list = data;
            list.forEach(user => {
                if (user.password == password.value && user.user == username.value) {
                    exist = true;
                };
            });
            if (!exist) {
                console.log('username libero')
            };
            window.sessionStorage.setItem('username', (username.value));
            exist = false;
            window.location.href = '/index.html'
        })
}
