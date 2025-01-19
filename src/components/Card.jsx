import { useState, useEffect } from "react";

export default function Card({ name, clickFunction }) {
    const [imgURL, setImageUrl] = useState(null)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json())
            .then(data => {
                setImageUrl(data.sprites.other.dream_world.front_default);
                console.log(imgURL)
            })
            .catch(err => {
                console.error("Error fetching image: ", err);
            })
    }, [])


    return <div className="card" onClick={() => clickFunction(name)}>
        <img src={imgURL} alt="loading..." />
        <h4>{name}</h4>
    </div>
}