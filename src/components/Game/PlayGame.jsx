import { Component } from "react";
import classes from './game.module.scss'

class PlayGame extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={classes.game}>
                <h2>full</h2>
                <div className={classes.green} >
                    <tr>
                        <div className={classes.greenstart}>
                            0
                        </div>
                        <tr>
                            <div className={classes.greenpath}>
                                <div>
                                    <tr>
                                        <td>0</td>
                                        <td className={classes.greenrow}>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td className={classes.greenrow}>1</td>
                                        <td className={classes.greenrow}>1</td>
                                        <td className={classes.greenrow}>1</td>
                                        <td className={classes.greenrow}>1</td>
                                        <td className={classes.greenrow}>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>2</td>
                                    </tr>
                                </div>
                                <div className={classes.triangle}>
                                    <p className={classes.text}>0</p>
                                </div>

                            </div>
                        </tr>
                    </tr>
                </div>
                <div className={classes.red} >
                    <tr>
                        <div className={classes.redpathandstart}>
                            <div className={classes.redstart}>
                                0
                            </div>
                            <tr>
                                <div className={classes.redpath}>
                                    <div>
                                        <tr>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td className={classes.redrow}>1</td>
                                            <td className={classes.redrow}>1</td>
                                            <td className={classes.redrow}>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>2</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>2</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>2</td>
                                            <td>2</td>
                                        </tr>
                                    </div>
                                    <div className={classes.triangle}>
                                        <p className={classes.text}>0</p>
                                    </div>

                                </div>
                            </tr>
                        </div>
                    </tr>
                </div>
                


            </div >
        )
    }
}
export default PlayGame;