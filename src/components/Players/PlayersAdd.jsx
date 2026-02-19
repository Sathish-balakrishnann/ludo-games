import { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Classes from './players.module.scss'
import { Button } from "react-bootstrap";

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

    handlePlayer1(e) {
        const value = e.target.value;
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

    startGame(){
        alert(
            this.state.player1+"\n"+
            this.state.player2+"\n"+
            this.state.player3+"\n"+
            this.state.player4
        )
    }
    render() {
        return (
            <article className={Classes.pageContant}>
                <div>
                    <h4>Add Players</h4>
                    <>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">Player 1</InputGroup.Text>
                            <Form.Control
                                className={Classes.player1}
                                value={this.state.player1}
                                onChange={this.handlePlayer1}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">Player 2</InputGroup.Text>
                            <Form.Control
                                className={Classes.player2}
                                value={this.state.player2}
                                onChange={this.handlePlayer2}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">Player 3</InputGroup.Text>
                            <Form.Control
                                className={Classes.player3}
                                value={this.state.player3}
                                onChange={this.handlePlayer3}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">Player 4</InputGroup.Text>
                            <Form.Control
                                className={Classes.player4}
                                value={this.state.player4}
                                onChange={this.handlePlayer4}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                        <Button onClick={this.startGame} >Start Game</Button>

                    </>
                </div >
            </article >
        )
    }
} export default PlayersAdd












{/* <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <Form.Control
        placeholder="Add Players"
        aria-label="Username"
        aria-describedby="basic-addon1"
    />
</InputGroup>
<InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <Form.Control
        placeholder="Add Players"
        aria-label="Username"
        aria-describedby="basic-addon1"
    />
</InputGroup>
<InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <Form.Control
        placeholder="Add Players"
        aria-label="Username"
        aria-describedby="basic-addon1"
    />
</InputGroup>
<InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <Form.Control
        placeholder="Add Players"
        aria-label="Username"
        aria-describedby="basic-addon1"
    />
</InputGroup> */}