let button = document.getElementById("button");
let citation = document.createElement("article");
    citation.innerHTML = "L'important n'est pas la chute, mais l'atterrissage.";
    document.body.appendChild(citation);

function showhide() {
    if (citation.style.display === "none") {
        citation.style.display = "block";
    }
    else {
        citation.style.display = "none";
    }
}