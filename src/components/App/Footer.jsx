import { Component } from "react";
import classes from './app.module.scss'


class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <footer className={classes.footer}>

                
                    <h6>ludogame@gmail.com</h6>
                    <h6>@2013</h6>
                    <h6>ludo_game</h6>
                
            </footer>
        )
    }
}
export default Footer;
