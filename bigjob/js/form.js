let messages = document.querySelector(".message");
messages.style.display = "none";
let usernameErr = document.getElementById("usernameErr");
let emailErr = document.getElementById("emailErr");
let passwordErr = document.getElementById("passwordErr");
let verifyPasswordErr = document.getElementById("verifyPasswordErr");

let btnCreation = document.getElementById("btn-create");

btnCreation.addEventListener("click", async function(event) {
    event.preventDefault();

    usernameErr.innerHTML = "";
    emailErr.innerHTML = "";
    passwordErr.innerHTML = "";
    verifyPasswordErr.innerHTML = "";
    messages.style.display = "none";

    let isValid = true;
    isValid = await validateUsername() && isValid;
    isValid = await validateEmail() && isValid;
    isValid = await validatePassword() && isValid;

    if (isValid) {
        messages.style.display = "none";
        console.log("Valid form");
    }
});


async function validateUsername() {
    let username = document.getElementById("username").value;
    let letters = /^[A-Za-z]+$/;

    if (username == "") {
        usernameErr.innerHTML = "Le nom d'utilisateur est obligatoire.";
        messages.style.display = "flex";
        return false;
    }
    else if (!username.match(letters)) {
        usernameErr.innerHTML = "Le nom d'utilisateur doit être uniquement composé de lettres.";
        messages.style.display = "flex";
        return false;
    }

    await simulateAsyncValidation();
    return true;
}

async function validateEmail() {
    let email = document.getElementById("email").value;

    if (email == "") {
        emailErr.innerHTML = "L'adresse email est obligatoire.";
        messages.style.display = "flex";
        return false;
    }
    else if (!email.endsWith("@laplateforme.io")) {
        emailErr.innerHTML = "Veuillez utiliser votre adresse de La Plateforme";
        messages.style.display = "flex";
        return false;
    }

    await simulateAsyncValidation();
    return true;
}

async function validatePassword() {
    let password = document.getElementById("password").value;
    let verifyPassword = document.getElementById("verifyPassword").value;
    let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    
    if (password == "" || verifyPassword == "") {
        passwordErr.innerHTML = "Les mots de passe sont obligatoires.";
        messages.style.display = "flex";
        return false;
    }
    else if (password.length < 8 || !password.match(passwordFormat)) {
        passwordErr.innerHTML = "Le mot de passe doit contenir au moins un chiffre, un caractère spécial, une lettre majuscule, une lettre minuscule et au moins 8 caractères ou plus.";
        messages.style.display = "flex";
        return false;
    }
    else if (password !== verifyPassword) {
        verifyPasswordErr.innerHTML = "Les mots de passe doivent être identiques.";
        messages.style.display = "flex";
        return false;
    }

    await simulateAsyncValidation();
    return true;
}

function simulateAsyncValidation() {
    return new Promise(resolve => setTimeout(resolve, 500));
}