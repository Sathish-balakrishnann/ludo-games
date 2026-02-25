import { Component } from "react";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lifeStages: ["rendering"]
        }



    }
    componentDidMount() {
        const lifeStages = this.state.lifeStages
        lifeStages.push("Component Mounted")
        this.setState({ lifeStages })
    }

    render() {


        return (
            <div>
                {this.state.lifeStages.map(stage => <div>{stage}</div>)}


            </div>
        )
    }

}
export default Home;