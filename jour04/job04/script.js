let button = document.getElementById("button");

button.addEventListener("click", async function getUsers() {
    let response = await fetch('utilisateur.json');
    let users = await response.json();

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let tr = document.createElement("tr");
        let tbody = document.getElementById("tbody");

        let id = document.createElement("td");
        id.innerHTML = user.id;

        let prenom = document.createElement("td");
        prenom.innerHTML = user.prenom;

        let nom = document.createElement("td");
        nom.innerHTML = user.nom;

        let email = document.createElement("td");
        email.innerHTML = user.email;

        tbody.appendChild(tr);
        tr.appendChild(id);
        tr.appendChild(prenom);
        tr.appendChild(nom);
        tr.appendChild(email);
    }
})