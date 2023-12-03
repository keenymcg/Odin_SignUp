// EMAIL FORMAT
const emailInput = document.getElementById("email");



// PHONE NUMBER



// PASSWORD MATCHING

const passwordInput = document.getElementById("password");
const retypePasswordInput = document.getElementById("retypePassword");
const passwordMatchMessage = document.getElementById("passwordMatchMessage");


passwordInput.addEventListener("input", function () {
    let timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const isPasswordValid = passwordPattern.test(passwordInput.value);

        if (isPasswordValid) {
            passwordInput.style.border = "2px solid rgb(8, 214, 8)";
        } else {
            passwordInput.style.border = "2px solid red";
        }
    }, 1000);
});


retypePasswordInput.addEventListener("input", function () {
    let timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
    const passwordsMatch = passwordInput.value === retypePasswordInput.value;
    passwordMatchMessage.textContent = passwordsMatch ? "Passwords match" : "Passwords do not match";
    passwordMatchMessage.style.color = passwordsMatch ? "green" : "red";
    if (retypePasswordInput.value === "") {
        passwordMatchMessage.textContent = "";
    }
    }, 1000);
});