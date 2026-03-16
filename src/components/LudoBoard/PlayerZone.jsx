import { Component } from "react";
import classes from './ludoboard.module.scss'
import PathCell from "./PathCell";

class PlayerZone extends Component {

    constructor(props) {
        super(props)

    }

    render() {

        const pathCells = Array.from({ length: 6 }, () => this.props.zoneId)
        const end = this.props.start === 1 ? 52 : this.props.start - 1  // condition? true : false
        let safeZone = classes.safeZone

        return (
            <div className={`${classes.zoneContainer} ${this.props.className}`} >
                <div className={classes.zoneHome}>
                    <div className={classes.whiteDiv}>
                        <div className={classes.homePiecePosition}></div>
                        <div className={classes.homePiecePosition}></div>
                        <div className={classes.homePiecePosition}></div>
                        <div className={classes.homePiecePosition}></div>

                    </div>
                </div>
                <div className={classes.zonePath}>
                    {pathCells.map((zoneId, index) => {
                        let pathId = this.props.start + index //start + index
                        return <PathCell zoneId={zoneId} pathId={pathId} isSafe={index === 1}/>
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