document.getElementById("signup-button").addEventListener("click", function () {
    location.href = "/users/sign-up/";
});


const form = document.getElementById('login-form');
const errorMessages = document.getElementById('error-messages');

document.getElementById("signup-button").addEventListener("click", function () {
    location.href = "/users/sign-up/";
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = form.elements.username.value;
    const password = form.elements.password.value;

    const response = await fetch('/users/sign-in/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        window.location.href = '/';
    } else {
        const data = await response.json();
        errorMessages.innerHTML = `<p class="error">${data.detail}</p>`;
    }
});