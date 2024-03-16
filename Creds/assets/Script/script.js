var username = sessionStorage.getItem('username');
var email = sessionStorage.getItem('email');
var password = sessionStorage.getItem('password');

document.getElementById('username').textContent = username ? username : 'Not provided';
document.getElementById('email').textContent = email ? email : 'Not provided';
document.getElementById('password').textContent = password ? password : 'Not provided';