import { Component } from "react";
import classes from './ludoboard.module.scss'
import ludoConfig from "./ludo.config.json"
import GameContext from "../../context/GameContext";


class PathCell extends Component {
    constructor(props) {
        super(props)
    }
    static contextType = GameContext

    render() {
        let classNames = classes.path
        classNames += " " + classes["zone__" + this.props.zoneId]

        if (this.props.isSafe) {
            classNames += " " + classes.safeZone;
        }
        if (this.props.isMountain) {
            classNames += " " + classes.mountain;
        }

        // let pathCellPieces = this.context.board[this.props.pathId]
        let pathCellPieces = this.context.movePiece


        return (

            <div className={`${classNames}`} title={this.props.pathId} >
                 {/* <span className={classes.pathId}>{this.props.pathId}</span> */}
                <div className={classes.placeholder}>

                    {Array.isArray(pathCellPieces) && pathCellPieces.map((color) => {

                        return <span className={"piece " + color} />

                    })}
                </div>

            </div>
        )
    }
}
export default PathCell;