let button = document.getElementById("button");

button.addEventListener("click", async function() {
    let response = await fetch("expression.txt");
    let text = await response.text();

    let printText = document.createElement("p");
    printText.innerHTML = text;
    document.body.appendChild(printText);
});