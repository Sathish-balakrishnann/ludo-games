import { Component } from "react";
import Classes from './players.module.scss'
import { Button, Container } from "react-bootstrap";
import image from '../../../public/playing-ludo-board.webp'
import TextInput from "../Common/TextInput";
import PlayerContext from "../../context/PlayerContext";

const fieldConfigs = [{
    name: "player1",
    label: "First Player"
},
{
    name: "player2",
    label: "Second Player"
},
{
    name: "player3",
    label: "Third Player"
},
{
    name: "player4",
    label: "Fourth Player"
}
]


class PlayersAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            player1: "",
            player2: "",
            player3: "",
            player4: ""
        }
        this.handlePlayer = this.handlePlayer.bind(this)
        this.startGame = this.startGame.bind(this)
        this.renderField = this.renderField.bind(this)
    }

    static contextType = PlayerContext

    handlePlayer(name) {
        return (value) => {
            this.setState({ [name]: value })
        }
    }

    startGame() {
        this.context.setPlayers(
            {
                player1: this.state.player1,
                player2: this.state.player2,
                player3: this.state.player3,
                player4: this.state.player4
            }
        )
    }
    renderField(field) {
        return (<TextInput
            value={this.state[field.name]}
            handleChange={this.handlePlayer(field.name)}
            label={field.label}
        />)
    }
    render() {
        return (
            <Container className={Classes.container}>
                <div className={Classes.image}>
                    <img src={image}></img>
                </div>
                <div className={Classes.form}>
                    <h4 className={Classes.title}>ADD PLAYERS</h4>

                    {fieldConfigs.map(this.renderField)}

                    <Button onClick={this.startGame} >Start Game</Button>

                </div>
            </Container>
        )
    }
} export default PlayersAdd

