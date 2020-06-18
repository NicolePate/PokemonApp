//require('dotenv').config()

window.onload = function() {
    getPokemon();
}
let arrayOfPokemon = [];

const getPokemon = () => {
    let irandom = Math.floor(Math.random() * 150)
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=5&offset='+irandom)
    .then(res => res.json())
    .then(user => user.results.map(pokemon => {
        arrayOfPokemon.push(pokemon)
        console.log(pokemon)
    }));
}
