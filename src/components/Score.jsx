import { useState, useEffect } from "react";

export default function Score({ score }) {
    const [high, setHigh] = useState(0);
    const [firstRound, setFirstRound] = useState(true)

    useEffect(() => {
        if (score > high) {
            setHigh(score);
            setFirstRound(false);
        }
    }, [score, high]); // This will run when currentScore or high changes

    return (
        <div className="scores">
            
            {firstRound ? <h2>Score: 0</h2> :
                score == 20 ? <h2 className="won">You won!</h2> :
                    score == 0 ? <h2 className="lost">You lost!</h2> :
                        <h2>Score: {score}</h2>}
            <h3>Best Score: {high}</h3>
        </div>
    )
}

