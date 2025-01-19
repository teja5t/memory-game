import PokemonImage from "./PokemonImage";

export default function Card({ imgURL, name, clickFunction }) {


    return <div className="card" onClick={() => clickFunction(name)}>
        <PokemonImage name={name}/>
        <h4>{name}</h4>
    </div>
}