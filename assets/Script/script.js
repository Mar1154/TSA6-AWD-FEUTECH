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
    `;
}

function storeCredentials(username, email, password) {
    try {
        let storedCredentials = {
            username: username,
            email: email,
            password: password
        };

        // Redirect to credentials.html
        window.location.href = 'Credentials/credentials.html';

        // Return false to prevent default form submission
        return false;
    } catch (error) {
        console.error("Error occurred in storeCredentials:", error);
        return false; // Ensure the function returns false on error
    }
}