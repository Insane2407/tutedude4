function handleBooking() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const errorDiv = document.getElementById('form-error');

        // Reset
        errorDiv.innerText = '';
        errorDiv.style.color = '#e54b65';

        if (!name && !email && !phone) {
            errorDiv.innerText = 'fill the details';
            return;
        }

        let errors = [];
        if (!name) errors.push('Name field is not filled');
        if (!email) errors.push('Email field is not filled');
        if (!phone) errors.push('Phone field is not filled');

        if (errors.length > 0) {
            errorDiv.innerText = errors.join(' | ');
        } else {
            errorDiv.innerText = 'Booking Confirmed!';
            errorDiv.style.color = 'green';
        }
    }

    // Initial render
    renderApp();