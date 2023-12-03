
const passwordInput = document.getElementById("password");
const retypePasswordInput = document.getElementById("retypePassword");
const passwordMatchMessage = document.getElementById("passwordMatchMessage");

let timeoutId;

retypePasswordInput.addEventListener("input", function () {
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