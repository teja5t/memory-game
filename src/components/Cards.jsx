import Card from "./Card";
import { useState } from "react";

const pokemon = [
    "pikachu",
    "charmander",
    "bulbasaur",
    "squirtle",
    "jigglypuff",
    "meowth",
    "eevee",
    "snorlax",
    "gengar",
    "mew",
    "dragonite",
    "psyduck",
    "lapras",
    "togepi",
    "lucario",
    "bellsprout",
    "gardevoir",
    "squirtle",
    "rayquaza",
    "arceus"
  ];
  
const clickedPokemon = {};

for (const name of pokemon) {
    clickedPokemon[name] = false;
}

function shuffle(array) {
    const newArr = [...array];
    let currentIndex = array.length;
    
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        // And swap it with the current element.
        [newArr[currentIndex], newArr[randomIndex]] = [
        newArr[randomIndex], newArr[currentIndex]];
    }

    return newArr;
}
export default function Cards({ changeScore }) {
    const [reload, setReload] = useState(true);

    function click(pokemonName) {
        if (clickedPokemon[pokemonName]) {
            for (const name of pokemon) {
                clickedPokemon[name] = false;
            }
            changeScore(0);
        }
        else {
            clickedPokemon[pokemonName] = true;
            changeScore(1);
        }
        console.log(clickedPokemon);
    
        shuffle(pokemon);

        setReload(!reload);
    }
    

    return <div className="cards">
        {shuffle(pokemon).map(pokemonName => (
            <Card 
                key={pokemonName}
                name={pokemonName}
                clickFunction={click}
            />
        ))}
    </div>
}