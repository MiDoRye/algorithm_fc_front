const form = document.getElementById('signup-form');
const errorMessages = document.getElementById('error-messages');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirm_password.value;

    if (password !== confirmPassword) {
        errorMessages.innerHTML = '<p class="error">비밀번호가 일치하지 않습니다.</p>';
        return;
    }

    const response = await fetch('/users/sign-up/', {
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
        window.location.href = '/';
    } else {
        const data = await response.json();
        errorMessages.innerHTML = `<p class="error">${data.detail}</p>`;
    }
});