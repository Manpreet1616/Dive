document.addEventListener('DOMContentLoaded', function() {
    const recommendationForm = document.getElementById('recommendation-form');
    const recommendationInput = document.getElementById('recommendation-input');
    const recommendationGrid = document.getElementById('recommendation-list');

    recommendationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const recommendationText = recommendationInput.value.trim(); // Get recommendation text

        if (recommendationText !== '') {
            // Create new recommendation item
            const newRecommendation = document.createElement('li');
            newRecommendation.classList.add('recommendation-item');
            newRecommendation.textContent = recommendationText;

            // Add new recommendation to the grid
            recommendationGrid.appendChild(newRecommendation);

            // Show confirmation message
            showAlert('Recommendation added successfully!');
        } else {
            showAlert('Please enter a recommendation.');
        }

        // Clear input field
        recommendationInput.value = '';
    });
});

// Show custom alert function
function showAlert(message) {
    const alertContent = document.getElementById("alertContent");
    alertContent.textContent = message;
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "block";
}

// Hide custom alert function
function hideAlert() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "none";
}

// Go to top function
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide the "Go to top" button based on scroll position
window.addEventListener('scroll', function() {
    const goToTopBtn = document.getElementById('goToTopBtn');
    if (window.scrollY > 100) {
        goToTopBtn.style.display = 'block';
    } else {
        goToTopBtn.style.display = 'none';
    }
});
