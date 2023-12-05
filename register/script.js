var loginButton = document.getElementById('loginLink');

document.addEventListener('DOMContentLoaded', function() {
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = '/login/index.html';
        });
    }
});