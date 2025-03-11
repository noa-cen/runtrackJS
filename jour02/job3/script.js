let button = document.getElementById("button");
let compteur = document.getElementById("compteur");

function addOne() {
    let x = compteur.textContent;

    button.addEventListener("click", function() {
        x++;
        compteur.innerHTML = x;
    })
}
addOne();