import { Component } from "react";
import classes from './game.module.scss'

class PlayGame extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={classes.game}>
                <div className={classes.main}>
                    <div className={classes.greenblue}>
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
                        <div className={classes.blue} >

                            <div className={classes.bluepath}>

                                <div>
                                    <tr>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td className={classes.bluerow}> </td>
                                        <td className={classes.bluerow}> </td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td className={classes.bluerow}> </td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td className={classes.bluerow}> </td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td className={classes.bluerow}> </td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td className={classes.bluerow}> </td>
                                        <td> </td>
                                    </tr>
                                </div>
                                <div className={classes.triangle}>
                                    <p className={classes.text}> </p>
                                </div>
                            </div>
                            <div className={classes.bluestart}>
                            </div>

                        </div>
                    </div>
                    <div className={classes.redyellow}>
                        <div className={classes.red} >
                            <tr>
                                <div className={classes.redpathandstart}>
                                    <div className={classes.redstart}>

                                    </div>
                                    <tr>
                                        <div className={classes.redpath}>
                                            <div className={classes.triangle}>
                                                <p className={classes.text}> </p>
                                            </div>
                                            <div>
                                                <tr>
                                                    <td> </td>
                                                    <td className={classes.redrow}> </td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td> </td>
                                                    <td className={classes.redrow}> </td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td> </td>
                                                    <td className={classes.redrow}> </td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td> </td>
                                                    <td className={classes.redrow}> </td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td className={classes.redrow}> </td>
                                                    <td className={classes.redrow}> </td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <td> </td>
                                                    <td> </td>
                                                    <td> </td>
                                                </tr>
                                            </div>
                                        </div>
                                    </tr>
                                </div>
                            </tr>
                        </div>
                        <div className={classes.yellow} >
                            <tr>
                                <div className={classes.yellowpath}>
                                    <div className={classes.triangle}>
                                        <p className={classes.text}> </p>
                                    </div>
                                    <div>
                                        <tr>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.yellowrow}> </td>
                                            <td className={classes.yellowrow}> </td>
                                            <td className={classes.yellowrow}> </td>
                                            <td className={classes.yellowrow}> </td>
                                            <td className={classes.yellowrow}> </td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td className={classes.yellowrow}> </td>
                                            <td> </td>
                                        </tr>
                                    </div>
                                </div>
                                <tr>
                                    <div className={classes.yellowstart}>

                                    </div>
                                </tr>
                            </tr>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default PlayGame;