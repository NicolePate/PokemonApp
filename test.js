

// const getPokemonLeft = () => {
//     fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(data => {
//         let random = Math.floor(Math.random()*20);
//         return fetch(data.results[random].url)
//     })
//     .then(res => res.json())
//     .then(data => {
//         pokemon.push(data)
//         console.log(pokemon);
//     })
//     .then(data => {
//         const pokemonData = data;
//         const left = document.getElementById("left");
//         const li = document.createElement("li");
//         const pic = document.createElement("img");
//         pic.setAttribute("src", `${pokemon[0].sprites.front_default}`);
//         li.appendChild(document.createTextNode(pokemon[0].species.name));
//         li.appendChild(pic);
//         left.append(li)
//     })
// };































// pokemon = [];
// //Pokemon stat = pokemon[0].stats[1].base_stat    <-----attack

// // const getPokemonLeft = () => {
// //     fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
// //     .then(res => res.json())
// //     .then(data => {
// //         let random = Math.floor(Math.random()*20);
// //         return fetch(data.results[random].url)
// //     })
// //     .then(res => res.json())
// //     .then(data => {
// //         pokemon.push(data)
// //         console.log(pokemon);
// //     })
// function teamRocket(){
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//      .then(response => response.json())
//      .then(function(allpokemon){
//      allpokemon.results.forEach(function(pokemon){
//        fetchPokemonData(pokemon); 
//      })
//     })
//    }
//    function fetchPokemonData(pokemon){
//     let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
//       fetch(url)
//       .then(response => response.json())
//       .then(function(pokeData){
//       console.log(pokeData)
//       })
//     }
//     function renderPokemon(pokeData){
//         let allPokemonContainer = document.getElementById('list');
//         let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
//         let pokeName = document.createElement('h4')
//         pokeName.innerText = pokeData.name
//         let pokeNumber = document.createElement('p')
//         pokeNumber.innerText = `#${pokeData.id}`
//         let pokeTypes = document.createElement('ul') 
//         //ul list will hold the pokemon types
//         createTypes(pokeData.types, pokeTypes) 
//         // helper function to go through the types array and create li tags for each one
//         pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
//         //appending all details to the pokeContainer div
//         allPokemonContainer.appendChild(pokeContainer);       
//         //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
//         }


    // .then(data => {
    //     const pokemonData = data;
    //     const left = document.getElementById("list");
    //     const li = document.createElement("li");
    //     const pic = document.createElement("img");
    //     pic.setAttribute("src", `${pokemon[0].sprites.front_default}`);
    //     li.appendChild(document.createTextNode(pokemon[0].species.name));
    //     li.appendChild(pic);
    //     left.append(li)
    // })
