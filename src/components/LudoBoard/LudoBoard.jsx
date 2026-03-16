import { Component } from "react";
import classes from './ludoboard.module.scss'
import PlayerZone from "./PlayerZone";

class LudoBoard extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className={classes.game}>
                <div className={classes.main}>
                    <PlayerZone className={classes.green} zoneId={1} start={1} end={52}/>
                    <PlayerZone className={classes.blue} zoneId={2} start={14} end={13}/>
                    <PlayerZone className={classes.yellow} zoneId={3} start={27} end={26}/>
                    <PlayerZone className={classes.red} zoneId={4} start={40} end={39}/>
                </div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>


            </div>

        )
    }
}
export default LudoBoard;


