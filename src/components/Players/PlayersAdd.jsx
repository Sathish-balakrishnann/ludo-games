import { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Classes from './players.module.scss'
import { Button, Container } from "react-bootstrap";
import image from '../../assets/images/clovece-nezlob-se.svg'
import TextInput from "../Common/TextInput";

class PlayersAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player1: "",
            player2: "",
            player3: "",
            player4: ""
        }
        this.handlePlayer1 = this.handlePlayer1.bind(this)
        this.handlePlayer2 = this.handlePlayer2.bind(this)
        this.handlePlayer3 = this.handlePlayer3.bind(this)
        this.handlePlayer4 = this.handlePlayer4.bind(this)
        this.startGame = this.startGame.bind(this)
    }

    handlePlayer1(value) {
        this.setState({ player1: value })
    }
    handlePlayer2(e) {
        const value = e.target.value;
        this.setState({ player2: value })
    }
    handlePlayer3(e) {
        const value = e.target.value;
        this.setState({ player3: value })

    }
    handlePlayer4(e) {
        const value = e.target.value;
        this.setState({ player4: value })
    }

    startGame() {
        alert(
            this.state.player1 + "\n" +
            this.state.player2 + "\n" +
            this.state.player3 + "\n" +
            this.state.player4
        )
    }
    render() {
        return (
            <Container className={Classes.container}>
                <div className={Classes.image}>
                    <img src={image}></img>
                </div>
                <div className={Classes.form}>
                    <h4 className={Classes.title}>ADD PLAYERS</h4>

                    <TextInput
                        className={Classes.player1}
                        value={this.state.player1}
                        handleChange={this.handlePlayer1}
                        label="Player 1"
                    />
                    <TextInput
                        className={Classes.player2}
                        value={this.state.player2}
                        handleChange={this.handlePlayer2}
                        label="Player 2"
                    />
                    <TextInput
                        className={Classes.player3}
                        value={this.state.player3}
                        handleChange={this.handlePlayer3}
                        label="Player 3"
                    />
                    <TextInput
                        className={Classes.player4}
                        value={this.state.player4}
                        handleChange={this.handlePlayer4}
                        label="Player 4"
                    />

                    <Button onClick={this.startGame} >Start Game</Button>

                </div>
            </Container>
        )
    }
} export default PlayersAdd

