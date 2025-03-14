let message = document.getElementById("message");
message.style.display = "none";
let btnCreation = document.getElementById("creation");
let letters = /^[A-Za-z]+$/;

btnCreation.addEventListener("click", async function(event) {
    event.preventDefault();

    let isValid = true;
    isValid = await validateFirstname() && isValid;
    isValid = await validateLastname() && isValid;
    isValid = await validateEmail() && isValid;
    isValid = await validateAddress() && isValid;
    isValid = await validatePostalCode() && isValid;
    isValid = await validatePassword() && isValid;

    if (isValid) {
        console.log("Valid form");
    }
});

async function validateFirstname() {
    let firstname = document.getElementById("firstname").value;
    if (firstname == "") {
        message.innerHTML = "Firstname must be filled out";
        message.style.display = "flex";
        return false;
    }
    else if (!firstname.match(letters)) {
        message.innerHTML = "Firstname must be only letters";
        message.style.display = "flex";
        return false;
    }
    await simulateAsyncValidation();
    return true;
}

async function validateLastname() {
    let lastname = document.getElementById("lastname").value;
    if (lastname == "") {
        message.innerHTML = "Lastname must be filled out";
        message.style.display = "flex";
        return false;
    }
    else if (!lastname.match(letters)) {
        message.innerHTML = "Lastname must be only letters";
        message.style.display = "flex";
        return false;
    }
    await simulateAsyncValidation();
    return true;
}

async function validateEmail() {
    let email = document.getElementById("email").value;
    if (email == "") {
        message.innerHTML = "Email must be filled out";
        message.style.display = "flex";
        return false;
    }
    else if (!email.includes("@") || !email.includes(".")) {
        message.innerHTML = "Invalid email address";
        message.style.display = "flex";
        return false;
    }
    await simulateAsyncValidation();
    return true;
}

async function validateAddress() {
    let address = document.getElementById("address").value;
    if (address == "") {
        message.innerHTML = "Address must be filled out";
        message.style.display = "flex";
        return false;
    }
    await simulateAsyncValidation();
    return true;
}

async function validatePostalCode() {
    let postalCode = document.getElementById("postalCode").value;
    if (postalCode == "") {
        message.innerHTML = "Postal code must be filled out";
        message.style.display = "flex";
        return false;
    }
    await simulateAsyncValidation();
    return true;
}

async function validatePassword() {
    let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    let password = document.getElementById("password").value;
    let verifyPassword = document.getElementById("verifyPassword").value;
    if (password == "" || verifyPassword == "") {
        message.innerHTML = "Password must be filled out";
        message.style.display = "flex";
        return false;
    }
    else if (password.length < 8 || !password.match(passwordFormat)) {
        message.innerHTML = "Password must contain at least one number, one special character, one uppercase letter, one lowercase letter, and at least 8 characters or more.";
        message.style.display = "flex";
        return false;
    }
    else if (password !== verifyPassword) {
        message.innerHTML = "Passwords must be identical";
        message.style.display = "flex";
        return false;
    }
    await simulateAsyncValidation();
    return true;
}

function simulateAsyncValidation() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}