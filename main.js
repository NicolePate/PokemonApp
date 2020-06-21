// require('dotenv').config()

window.onload = function() {
    
    
    }

pokemon = [];


// creates a pull from API of 200 randomize pokemon. Once onclick is selected it displays 
// pokemon type, and image
const getPokemonOne = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=200&offset=200')
    .then(res => res.json())
    .then(data => {
        let random = Math.floor(Math.random()*200);
        return fetch(data.results[random].url)
    })
    .then(res => res.json())
    .then(data => {
        pokemon.push(data)
        console.log(pokemon);
    })
    .then(data => {
        pokemonData = data;
        const one = document.getElementById("one");
        const li = document.createElement("li");
        const pic = document.createElement("img");
        pic.setAttribute("src", `${pokemon[0].sprites.front_default}`);
        li.appendChild(document.createTextNode(pokemon[0].species.name));
        li.appendChild(pic);
        one.append(li)
    })
}
// will pull second Pokemon from  API of 200 randomize pokemon. Once onclick is selected it displays 
// pokemon type, and image
const getPokemonTwo = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=200&offset=200')
    .then(res => res.json())
    .then(data => {
        let random = Math.floor(Math.random()*200);
        return fetch(data.results[random].url)
    })
    .then(res => res.json())
    .then(data => {
        pokemon.push(data)
        console.log(pokemon);
    })
    .then(data => {
        pokemonData = data;
        const two = document.getElementById("two");
        const pic = document.createElement("img");
        const li = document.createElement("li");
        pic.setAttribute("src", `${pokemon[1].sprites.front_default}`);
        li.appendChild(document.createTextNode(pokemon[1].species.name));
        li.appendChild(pic);
        two.append(li)
    })
}

//a function to conpare the 2 pokemon picked at random and compares there stats. The 
// pokemon with the higher stats wins. 
// ?can not get the image of the winning pokemon to appear?
const battlePokemon= () => {
    
    if ((pokemon[0].stats[1].base_stat) > (pokemon[1].stats[1].base_stat)) {
        winner = pokemon[0].species.name
    }
    else {
        winner = pokemon[1].species.name
       
    }
    const pokemonWinner = document.getElementById('winner');
        const li = document.createElement('li');
        const pic = document.createElement("img");
        const text = document.createTextNode(`${winner}is the winner!`);
        // pic.setAttribute("src", `${winner}`); commented out- breaking code
        li.appendChild(text);
        pokemonWinner.append(li);
}
// Reset button- but only clears board. Selects the same pokemon? Need to fix
const resetPokemon = () => {
    document.getElementById("two").innerHTML = "";
    document.getElementById("one").innerHTML = "";
    document.getElementById("winner").innerHTML = "";
  }