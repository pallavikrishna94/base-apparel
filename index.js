const submit = document.querySelector("submit");
const error = document.querySelector(".error");
const form = document.querySelector("form");
const input = document.querySelector("input");
const icon = document.querySelector(".error-circle");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault()

    const inputValue = input.value.trim();

    if (!isEmail(inputValue)) {
        error.style.display = "block";
        icon.style.display = "block";
    } else {
        error.style.display = "none";
        icon.style.display = "none"; 
    }
}

function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

function isEmail(input) {
    const isValid = isValidEmail(input);
    console.log({isValid});
    return isValid
} 