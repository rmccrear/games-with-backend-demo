import { useState, useEffect } from 'react';

export default function GameDisplay() {
    const [game, setGame] = useState(null);

    useEffect(() => {
        // Fetch game using async/await
        // Store result in state
        
        async function goFetch() {
            const response = await fetch("http://167.71.255.241:3000/api/v1/games/fa921d6c-18fb-4b1a-b39a-d2b9b17c4b6a");
            console.log(response);
            const data = await response.json();
            console.log(data);
            setGame(data);
        }
        goFetch();

    }, []);

    if (!game) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Game</h1>
            {/* Display name, weight, and height */}
            <p>Title: {game.name}</p>
            <p>${game.cost}</p>
        </div>
    );
}
