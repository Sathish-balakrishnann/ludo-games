import { Component } from "react";
import classes from './ludoboard.module.scss'
import PathCell from "./PathCell";
import GameContext from "../../context/GameContext";

class PlayerZone extends Component {

    constructor(props) {
        super(props)

    }
    static contextType = GameContext


    render() {

        const pathCells = Array.from({ length: 6 }, () => this.props.zoneId)
        const end = this.props.start === 1 ? 52 : this.props.start - 1  // condition? true : false
        let safeZone = classes.safeZone
        const homePiecePosition = Array.from({ length: 4 })

        const player = "player" + this.props.zoneId;
        const pieces = Array.isArray(this.context.pieces[player]) ? this.context.pieces[player] : []
        const pieceColur = "piece " + this.props.pieceColur



        return (
            <div className={`${classes.zoneContainer} ${this.props.className}`} >
                <div className={classes.zoneHome + " " + classes["zoneHome__" + this.props.zoneId]}>

                    {homePiecePosition.map((_, index) => {
                        return <div className={classes.homePiecePosition}>
                            {pieces[index] === 0 ? <span className={pieceColur} /> : ""}
                        </div>
                    })}

                </div>
                <div className={classes.zonePath}>
                    {pathCells.map((zoneId, index) => {
                        let pathId = this.props.start + index //start + index
                        return <PathCell zoneId={zoneId} pathId={pathId} isSafe={index === 1} />
                    })}
                    {pathCells.map((zoneId, index) => {
                        let pathId = index === 0 ? end : zoneId + "H" + index
                        return <PathCell zoneId={zoneId} end={end} pathId={pathId} isSafe={index !== 0} /> /* end , index+ H */
                    })}
                    {pathCells.map((zoneId, index) => {
                        let pathId = end - 1 - index
                        return <PathCell zoneId={zoneId} pathId={pathId} isMountain={index === 2} /> /* end-1-index */
                    })}
                </div>
                <div className={classes.zoneFinal}>
                    <p className={classes.text}> </p>
                </div>
            </div>
        )
    }
}

export default PlayerZone;