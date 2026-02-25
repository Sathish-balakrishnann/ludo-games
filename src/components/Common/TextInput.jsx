import { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


class TextInput extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.props.handleChange(e.target.value)
    }

    render() {
        return (

            <InputGroup size="sm" className="mb-3" >
                <InputGroup.Text id="inputGroup-sizing-sm">{this.props.label}</InputGroup.Text>
                <Form.Control
                    className={this.props.className}
                    value={this.props.value}
                    onChange={this.onChange}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </InputGroup >

        )
    }
}
export default TextInput;