async function getPokemons() {
    let response = await fetch("pokemon.json");
    let pokemons = await response.json();

    for (let i = 0; i < pokemons.length; i++) {
        let pokemon = pokemons[i];
        let sectionFiches = document.querySelector(".fiches");

        let pokemonElement = document.createElement("article");

        let nameElement = document.createElement("h2");
        nameElement.innerHTML = `${pokemon.id}: ${pokemon.name.english}`;
        let typeElement = document.createElement("p");
        typeElement.innerHTML = pokemon.type;
        let baseElement = document.createElement("p");
        baseElement.innerHTML = `HP: ${pokemon.base.HP} <br> 
        Attack: ${pokemon.base.Attack} <br> 
        Defense: ${pokemon.base.Defense} <br> 
        Sp. Attack: ${pokemon.base["Sp. Attack"]} <br>
        Sp. Defense: ${pokemon.base["Sp. Defense"]} <br>
        Speed: ${pokemon.base.Speed}`;

        sectionFiches.appendChild(pokemonElement);
        pokemonElement.appendChild(nameElement);
        pokemonElement.appendChild(typeElement);
        pokemonElement.appendChild(baseElement);
    }
}
getPokemons();

document.getElementById("button").addEventListener("click", async function() {
    let idValue = document.getElementById("id").value.trim();
    let nameValue = document.getElementById("name").value.trim().toLowerCase();
    let typeValue = document.getElementById("type").value;

    let response = await fetch("pokemon.json");
    let pokemons = await response.json();

    let filteredPokemons = pokemons.filter(pokemon => {
        let matchId = idValue ? pokemon.id == idValue : true;
        let matchName = nameValue ? pokemon.name.english.toLowerCase().includes(nameValue) : true;
        let matchType = typeValue ? pokemon.type.includes(typeValue) : true;

        return matchId && matchName && matchType;
    });

    let results = document.getElementById("results");
    results.innerHTML = "";

    if (filteredPokemons.length > 0) {
        filteredPokemons.forEach(pokemon => {
            let p = document.createElement("p");
            p.innerHTML = `#${pokemon.id} - ${pokemon.name.english} (${pokemon.type.join(", ")})`;
            results.appendChild(p);
        });
    } else {
        results.innerHTML = "<p>No pokemon found.</p>";
    }
});