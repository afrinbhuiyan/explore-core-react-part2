import { useState } from "react"

export default function Batsman() {
    const   [ runs, setRuns ] = useState(0);
    const   [ sixes, setSixes ] = useState(0);

    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }

    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns);
    }

    const handleSix = () => {
        const updateRuns = runs + 6;
        const updatedSixes = sixes  + 1;
        setSixes(updatedSixes);
        setRuns(updateRuns);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs > 50 && <p>You Score: 50</p>
            }
            <h2>Score: {runs}</h2>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}