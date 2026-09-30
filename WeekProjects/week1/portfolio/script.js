// Select the contact form
const contactForm = document.getElementById("contactForm");

// Add submit event to the form
contactForm.addEventListener("submit", function(event) {

    // Stop the form from refreshing the page
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields.");
        return;
    }

    // Show success message
    alert("Thank you, " + name + "! Your message has been submitted.");

    // Clear the form
    contactForm.reset();
});

