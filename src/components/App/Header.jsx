import { Component } from "react"
import './Header.scss'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        )
    }
}
export default Header; 