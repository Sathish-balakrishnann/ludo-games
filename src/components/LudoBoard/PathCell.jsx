import { Component } from "react";
import classes from './ludoboard.module.scss'


class PathCell extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let classNames = classes.path
        classNames += " " + classes["zone__" + this.props.zoneId]
        if (this.props.isSafe) {
            classNames += " " + classes.safeZone;
        }
        if (this.props.isMountain){
            classNames +=" " + classes.mountain;
        }


        return (

            <div className={`${classNames}`} >
                {/* {this.props.pathId} */}
            </div>
        )
    }
}
export default PathCell;