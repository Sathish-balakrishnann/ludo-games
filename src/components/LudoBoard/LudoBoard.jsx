import { Component } from "react";
import classes from './ludoboard.module.scss'

class LudoBoard extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
                <div className={classes.game}>
                    <div className={classes.main}></div>

                </div>

                )
    }
}
                export default LudoBoard;


