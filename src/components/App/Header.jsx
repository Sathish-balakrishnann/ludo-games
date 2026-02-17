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

                <img src={logo} />
                <div>
                    <h2>Ludo </h2>
                </div>

                <div>
                    <NavLink to="/"> Home</NavLink>
                    <NavLink to="/players">Players</NavLink>
                    <NavLink to="/ludo">Game</NavLink>
                </div>
            </header>
        )
    }
}
export default Header; 