// your ImageSlider code here!
import React from "react";

export default class ImageSlider extends React.Component {
    constructor(props) {
        super();
        this.state = {
            currentSlideIndex: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentSlideIndex: ++this.state.currentSlideIndex,
            });
        }, 1000);
    }
    
    render() {
        return(<p>{`I am on slide ${this.state.currentSlideIndex}`}</p>)
    }
}