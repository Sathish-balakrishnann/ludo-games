import { Component } from "react"
import classes from './app.module.scss'
import { NavLink } from "react-router"
import logo from "../../assets/images/ludoLogo.jpg"

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className={classes.header}>

                <div className={classes.title}>
                    <img src={logo} />
                    <h2>Ludo</h2>
                </div>

                <div className={classes.navlink}>
                    <NavLink to="/"> <h5>Home</h5></NavLink>
                    <NavLink to="/players"><h5>Players</h5></NavLink>
                    <NavLink to="/ludo"><h5>Game</h5></NavLink>
                </div>
            </header>
        )
    }
}
export default Header; 