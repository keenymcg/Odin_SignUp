
function inputBorder(boolean, inputType) {
    if (boolean) {
        inputType.style.border = "2px solid rgb(8, 214, 8)";
    } else {
        inputType.style.border = "2px solid red";
    };
};


// NAMES

const fNameInput = document.getElementById("first_name");

fNameInput.addEventListener("input", function() {
    let timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
        const fNamePattern = /^[a-zA-Z]+$/;
        const isFNameValid = fNamePattern.test(fNameInput.value);
        inputBorder(isFNameValid, fNameInput);
    }, 300);
});

const lNameInput = document.getElementById("last_name");

lNameInput.addEventListener("input", function() {
    let timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
        const lNamePattern = /^[a-zA-Z]+$/;
        const isLNameValid = lNamePattern.test(lNameInput.value);
        inputBorder(isLNameValid, lNameInput);
    }, 300);
});


// EMAIL FORMAT
const emailInput = document.getElementById("email");

emailInput.addEventListener("input", function() {
    let timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
        const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const isEmailValid = emailPattern.test(emailInput.value);
        inputBorder(isEmailValid, emailInput);
    }, 200);
});


// PHONE NUMBER
// Done via inline JS in the HTML phone-input 


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
        inputBorder(isPasswordValid, passwordInput);
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