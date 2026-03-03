import { Component } from "react";

class PlayerZone extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={classes.green} >
                <tr>
                    <div className={classes.greenstart}>

                    </div>
                    <tr>
                        <div className={classes.greenpath}>
                            <div>
                                <tr>
                                    <td></td>
                                    <td className={classes.greenrow}></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className={classes.greenrow}> </td>
                                    <td className={classes.greenrow}> </td>
                                    <td className={classes.greenrow}> </td>
                                    <td className={classes.greenrow}> </td>
                                    <td className={classes.greenrow}> </td>
                                </tr>
                                <tr>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                            </div>
                            <div className={classes.triangle}>
                                <p className={classes.text}> </p>
                            </div>

                        </div>
                    </tr>
                </tr>
            </div>
        )
    }
}

export default PlayerZone;