document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.querySelector('.email-signup button[type="submit"]');
    getStartedButton.addEventListener('click', function(event) {
    event.preventDefault();
    getStartedButton.textContent = "Processing...";
});
});


