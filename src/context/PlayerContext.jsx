import React, { createContext, useState } from "react";

const PlayerContext = createContext({
    players: {
        player1: "",
        player2: "",
        player3: "",
        player4: ""
    },
    setPlayers: () => {

    }
})

export const PlayersProvider = ({ children }) => {
    const [players, setPlayers] = useState({})
    const handlePlayers = (newPlayers) => {
        setPlayers(newPlayers)
    }
    return (
        <PlayerContext.Provider value={{ players, setPlayers: handlePlayers }}>
            {children}
        </PlayerContext.Provider>
    )

}

export default PlayerContext;