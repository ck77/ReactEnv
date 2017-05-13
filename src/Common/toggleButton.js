import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class ToggleButton extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggleOn: true
        };

        this.click = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <Button bsStyle={this.state.isToggleOn ? "success" : "danger"} onClick={this.click}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </Button>
        );
    }
}