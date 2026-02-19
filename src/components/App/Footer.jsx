import { Component } from "react";
import classes from './app.module.scss'


class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <footer className={classes.footer}>
                <h6>&copy; 2013 Copyright: playludo.com</h6>
            </footer>
        )
    }
}
export default Footer;
