
if (window.sessionStorage.getItem('username')) {
    document.querySelector('#loggato').innerHTML = `
    <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-regular fa-circle-user text text-dark link-success"></i>
            ${window.sessionStorage.getItem('username')}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#" onclick="logout()"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a></li>
        </ul>
    </div>`;
    document.querySelector('#loggato').href = 'index.html'
}

logout = () => {
    sessionStorage.clear()
    document.querySelector('#loggato').innerHTML = `
    <a class="nav-link" href="login.html"><i
                                    class="fa-regular fa-circle-user me-2 text text-dark link-success mb-md-5"></i>Login</a>`
}