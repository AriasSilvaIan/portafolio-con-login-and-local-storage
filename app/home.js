document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento predeterminado del botón de envío
            handleLogout();
        });
    }

    // Agregar un event listener para el evento "popstate" (cuando el usuario navega hacia adelante o hacia atrás en la historia de navegación)
    window.addEventListener('popstate', function(event) {
        // Limpiar la base de datos local al cambiar de página
    // localStorage.clear();
    });
});

function handleLogout() {
    // Eliminar la información del usuario en localStorage o realizar cualquier otro proceso de logout necesario
    // Mostrar un mensaje de despedida
    alert('¡Hasta pronto!');
    // Limpiar la base de datos local
    // localStorage.clear();
    // Redirigir al usuario a la página de login
    window.location.href = './../login.html';
}


