document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input-field');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const createAccountButton = document.getElementById('create-account-button');

    function checkPasswordMatch() {
        if (password.value !== confirmPassword.value) {
            password.classList.add('mismatch');
            confirmPassword.classList.add('mismatch');
        } else {
            password.classList.remove('mismatch');
            confirmPassword.classList.remove('mismatch');
        }
    }

    function checkFormValidity() {
        let isValid = true;
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
            }
        });
        createAccountButton.disabled = !isValid;
    }

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.checkValidity()) {
                this.classList.add('invalid');
            }
            this.classList.add('touched');
            checkFormValidity();
        });

        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('invalid');
            }
            checkFormValidity();
        });

        if (input === password || input === confirmPassword) {
            input.addEventListener('blur', checkPasswordMatch);
            input.addEventListener('input', checkPasswordMatch);
        }
    });

    createAccountButton.addEventListener('click', function(event) {
        if (password.value !== confirmPassword.value) {
            event.preventDefault(); // Prevent form submission
            alert('Passwords do not match.');
        }
    });
});
