document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign Up Successful!');
});

document.getElementById('signin-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign In Successful!');
});

const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

if (sunIcon && moonIcon) {
    sunIcon.addEventListener('click', () => {
        body.classList.add('dark-mode');
    });

    moonIcon.addEventListener('click', () => {
        body.classList.remove('dark-mode');
    });
}
