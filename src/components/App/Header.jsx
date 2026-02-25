import { Component } from "react"
import classes from './app.module.scss'
import { NavLink } from "react-router"
import logo from "../../assets/images/ludoLogo.jpg"
import PlayerContext from "../../context/PlayerContext"
import Badge from 'react-bootstrap/Badge';

class Header extends Component {
    constructor(props) {

        super(props)
    }
    static contextType = PlayerContext

    render() {
        const player1 = this.context.players.player1
        const player2 = this.context.players.player2
        const player3 = this.context.players.player3
        const player4 = this.context.players.player4
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
                <div className={classes.playersname}>
                    <Badge pill bg="danger">{player1}</Badge>
                    <Badge pill bg="secondary">{player2}</Badge>
                    <Badge pill bg="primary">{player3}</Badge>
                    <Badge pill bg="warning">{player4}</Badge>
                </div>
            </header>
        )
    }
}
export default Header; 