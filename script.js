// Script para manejar el formulario de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error-msg');

    // Validación simple de usuario y contraseña
    if (username === 'admin' && password === '1234') {
        // Redirige a la página de bienvenida si las credenciales son correctas
        window.location.href = 'welcome.html';
    } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        errorMsg.textContent = 'Usuario o contraseña incorrectos. Intenta nuevamente.';
    }
});
