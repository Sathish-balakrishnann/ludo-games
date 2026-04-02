import { Component } from "react";
import classes from './ludoboard.module.scss'
import PlayerZone from "./PlayerZone";
import GameContext from "../../context/GameContext";

class LudoBoard extends Component {
    constructor(props) {
        super(props)

    }
    static contextType = GameContext

    componentDidMount() {
        this.context.initializeGame()
    }


    render() {

        return (
            <div className={classes.game}>
                <div className={classes.main}>
                    <PlayerZone className={classes.green} zoneId={1} start={1} pieceColur={"green"} />
                    <PlayerZone className={classes.blue} zoneId={2} start={14} pieceColur={"blue"} />
                    <PlayerZone className={classes.yellow} zoneId={3} start={27} pieceColur={"yellow"} />
                    <PlayerZone className={classes.red} zoneId={4} start={40} pieceColur={"red"} />
                </div>
                <div>

                    {[1, 2, 3, 4, 5, 6].map(diceNumber => (
                        < button key={diceNumber} onClick={() => this.context.movePiece("player1", 0, diceNumber)}>
                            {diceNumber}
                        </button>
                    ))}

                </div>

            </div >

        )
    }
}


export default LudoBoard;


