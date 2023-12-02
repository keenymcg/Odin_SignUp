// GOOGLE DEVKIT DOESN't recognise the JS..


// Get references to the password and retypePassword input elements
const passwordInput = document.getElementById("password");
const retypePasswordInput = document.getElementById("retypePassword");
const passwordMatchMessage = document.getElementById("passwordMatchMessage");

// Add an event listener to the retypePassword input
retypePasswordInput.addEventListener("input", function () {
    // Check if the passwords match
    const passwordsMatch = passwordInput.value === retypePasswordInput.value;

    // Display a message based on the comparison result
    passwordMatchMessage.textContent = passwordsMatch ? "Passwords match" : "Passwords do not match";
});