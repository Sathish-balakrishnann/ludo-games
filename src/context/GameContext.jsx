import React, { createContext, useState } from "react";

const GameContext = createContext({
    players: {
        player1: "",
        player2: "",
        player3: "",
        player4: ""
    },
    setPlayers: () => {

    },
    board: {},
    pieces: {}
})

export const GameProvider = ({ children }) => {
    const [players, setPlayers] = useState({})
    const [pieces, setPieces] = useState({})
    const [board, setBoard] = useState({})


    const handlePlayers = (newPlayers) => {
        setPlayers(newPlayers)
    }

    const initializeGame = () => {
        const initialPosition = [0, 0, 0, 0]
        setPieces({
            player1: initialPosition,
            player2: initialPosition,
            player3: initialPosition,
            player4: initialPosition
        })
        setBoard({

        })
    }

    function movePiece(player, piece, diceNumber) {
        setPieces(prev => {
            let updated = { ...prev }
            let playerPieces = [...updated[player]]

            playerPieces[piece] += diceNumber

            updated[player] = playerPieces

            return updated
        })
        console.log("test", player, piece, diceNumber,)
    }
    console.log(pieces)

    return (
        <GameContext.Provider value={{ players, board, pieces, setPlayers: handlePlayers, initializeGame, movePiece }}>
            {children}
        </GameContext.Provider>
    )

}

export default GameContext;