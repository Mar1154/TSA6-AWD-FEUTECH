function slideLeft() {
    document.querySelector('.winCover').style.transform = 'translateX(-100%)';
    var winLogin = document.querySelector('.winCover');
    winLogin.innerHTML = `
    <div class="header">
        <h1>WELCOME!</h1>
    </div>
    <div class="body">
        <p>Already have an account? Log in now!</p>
        <button onclick="slideRight()">Login</button>
    </div>
    `;
}

function slideRight() {
    document.querySelector('.winCover').style.transform = 'translateX(0)';
    var winLogin = document.querySelector('.winCover');
    winLogin.innerHTML = `
    <div class="header">
        <h1>WELCOME!</h1>
    </div>
    <div class="body">
        <p>Don't have an account? Come, Sign up!</p>
        <button onclick="slideLeft()">Sign Up</button>           
    </div>
    <p>(User Credentials are shown during Sign Up)</p>
    `;
}

// Storing login credentials not included in the project

// function storeLoginCreds(email, password) {
//     event.preventDefault();
//     sessionStorage.setItem('email', email);
//     sessionStorage.setItem('password', password);
//     window.location.href = 'Creds/creds.html';
// }

function storeCredentials(username, email, password) {
    event.preventDefault();
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
    window.location.href = 'Creds/creds.html';
}