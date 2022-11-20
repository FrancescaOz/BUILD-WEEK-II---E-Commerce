// VARIABILI
var firstName, surname, email, password, btnUp, username, list = [], exist = false, errName, errSurname, errEmail, errUser, errPass, outcome = false;
//REGEX

var regexNome = /^[\s\w]{1,10}$/;
var regexEmail = /^[\w-._]+@([\w-]+.)+[\w-]{2,5}$/;
var regexPassword = /^[A-Za-z0-9!#$%&@*?]{8,100}$/;
var regexUser = /^[\d\w-._]{3,16}$/;


// ON LOAD
window.addEventListener("DOMContentLoaded", init);

function init() {
    btnUp = document.getElementById('btnUp');
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
    btnUp.addEventListener('click', function () {
        // RICHIAMO VALIDAZIONE
        validation();
    });
}

//VALIDAZIONE
function validation() {


    if (!regexNome.test(firstName.value)) {
        errName.innerHTML = 'Inserire correttamente i dati';
    } else {
        errName.innerHTML = '';
    };

    if (!regexNome.test(surname.value)) {
        errSurname.innerHTML = 'Inserire correttamente i dati';

    } else {
        errSurname.innerHTML = '';
    };

    if (!regexEmail.test(email.value)) {
        errEmail.innerHTML = 'Inserire correttamente i dati';

    } else {
        errEmail.innerHTML = '';
    };

    if (!regexPassword.test(password.value)) {
        errPass.innerHTML = 'La password deve contenere almeno 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale';

    } else {
        errPass.innerHTML = '';
    };
    if (!regexUser.test(username.value)) {
        errUser.innerHTML = 'Inserire correttamente i dati';

    } else {
        errUser.innerHTML = '';
    };

    if (regexNome.test(firstName.value) && regexNome.test(surname.value) && regexEmail.test(email.value) && regexPassword.test(password.value) && regexUser.test(username.value)) {
        // RICHIAMO EXISTENCE
        existence();

    }

}

// FUNCTION EXISTENCE USERNAME E EMAIL
async function existence() {
    let response = await fetch("http://localhost:3000/users")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            list = data;
            list.forEach(user => {
                if (user.email == email.value) {
                    errEmail.innerHTML = "Email già in uso!";
                    exist = true;
                }
                if (user.user == username.value) {
                    errUser.innerHTML = "Username già in uso!";
                    exist = true;
                    return;
                }

            });
            // if (!exist) {
            //     console.log('username libero')
            // };
            exist = false;
        })
    // CREATE OBJECT DATA
    var data = {
        firstname: firstName.value,
        surname: surname.value,
        email: email.value,
        user: username.value,
        password: password.value
    };
    // RICHIAMO ADD DATA
    addData(data);
    window.location.href = 'login.html'
}

// FUNCTION ADD DATA FOR PUSHING IN THE JSON

async function addData(data) {

    let response = await fetch('http://localhost:3000/users',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(data),
        }
    ).then(() => {
        sessionStorage.setItem("registration", "true");
    })

}