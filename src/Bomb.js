// your Bomb code here!
import React from "react";

export default class Bomb extends React.Component {
    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount,
        };
}

componentDidMount() {
        setInterval(() => {
        let countDown = --this.state.secondsLeft
        this.setState({
            secondsLeft: countDown
        })
    }, 1000);
    }

    render() {
        if (this.state.secondsLeft <= 0) {
            return <p>{`Boom!`}</p>
        } else {
            return <p>{`${this.state.secondsLeft} seconds left before I go boom!`}</p>
    }
}
}

