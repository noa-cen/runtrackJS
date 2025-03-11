let number1 = parseInt(prompt("Entrer un nombre entier"));
let number2 = parseInt(prompt("Entrer un autre nombre entier"));

function isPrime(number) {
    for (let i = 2; i <= number; i++) {
        if (number % i == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}

function sommeNombresPremiers() {
    if (isPrime(number1) && isPrime(number2)) {
        let result = number1 + number2;
        return result;
    }
}
sommeNombresPremiers();
console.log(sommeNombresPremiers());