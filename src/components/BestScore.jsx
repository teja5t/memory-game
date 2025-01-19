import { useState, useEffect } from "react";

export default function BestScore({ currentScore }) {
    const [high, setHigh] = useState(0);

    useEffect(() => {
        if (currentScore > high) {
            setHigh(currentScore);
        }
    }, [currentScore, high]); // This will run when currentScore or high changes

    return (
        <h3>Best Score: {high}</h3>
    );
}