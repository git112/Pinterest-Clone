document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (email === 'user@example.com' && password === 'password') {
        
        localStorage.setItem('userEmail', email);
        window.location.href = 'profile.html';
    } else {
        alert('Invalid email or password.');
    }
});

document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        this.textContent = '👁️'; 
    }
});
