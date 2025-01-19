import { useState, useEffect } from "react";

export default function PokemonImage({ name }) {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.sprites.other.dream_world.front_default);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching image:", error);
            setLoading(false);
        });
    }, []); // Empty dependency array makes this run only once when the component mounts

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {imageUrl ? (
                <img src={imageUrl} alt={name + ' image'} />
            ) : (
                <p>No image found</p>
            )}
        </div>
    );
}
