async function jsonValueKey() {
    let response = await fetch("fichier.json");
    let infos = await response.json();

    let city = document.createElement("p");
    city.innerHTML = infos.city;
    document.body.appendChild(city);
}
jsonValueKey();