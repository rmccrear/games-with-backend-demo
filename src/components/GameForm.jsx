
export default function GameForm() {

    function handleForm(event) {
        event.preventDefault();
        
        const gameName = event.target.elements.game_name.value;
        const gameCost = event.target.elements.game_cost.value;

        const game = {
            name: gameName,
            cost: gameCost
        }
        console.log(game)
        fetch("http://167.71.255.241:3000/api/v1/games/", {
            method: "POST",
            body: JSON.stringify(game),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    return (<>
        <h1>Enter your game here</h1>
        <form onSubmit={handleForm}>
            <div>
                <label> Name of Game </label>
                <input type="text" id="game_name" name="game_name" />
            </div>
            <div>
                <label> Cost of Game </label>
                <input type="number" id="game_cost" name="game_cost" />
            </div>
            <div>
                <input type="submit" value="Add Game" />
            </div>
        </form>
    </>)
}
