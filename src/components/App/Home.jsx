import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lifeStages: ["rendering"],
            counter: 0
        }
        this.handleAddClick = this.handleAddClick.bind(this)
        this.handleReduceClick = this.handleReduceClick.bind(this)
    }
    componentDidMount() {
        const lifeStages = this.state.lifeStages
        lifeStages.push("Component Mounted")
        this.setState({ lifeStages })
    }
    handleAddClick() {
        this.setState(
            (prevState) => ({
                counter: prevState.counter + 1
            })
        )
    }
    handleReduceClick() {
        this.setState(
            (prevState) => ({
                counter: prevState.counter - 1
            })
        )
    }
    componentDidUpdate(prevProps, prevState) {
        const lifeStages = this.state.lifeStages
        lifeStages.push("Component Updated")
        this.setState({ lifeStages })
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.counter === nextState.counter) {
            return false;
        }
        return true;
    }
    componentWillUnmount(){
        alert("i am Exiting")
    }

    render() {


        return (
            <Row>
                <Col lg={3}>
                    <p>counter :{this.state.counter}</p>
                    <Button className="mx-2" onClick={this.handleAddClick}>ADD</Button>
                    <Button onClick={this.handleReduceClick}>Reduce</Button>
                </Col>
                <Col lg={3}>
                    {this.state.lifeStages.map(stage => <div>{stage}</div>)}
                </Col>
            </Row>
        )
    }

}
export default Home;