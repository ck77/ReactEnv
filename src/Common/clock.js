import React from 'react';

export default class Clock extends React.Component {
    constructor() {
        super();
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>{this.state.date.toLocaleString()}</div>
        );
    }
}