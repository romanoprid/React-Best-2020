import React from "react";
import { ImageUI } from "../styles/HeadingImageUI";
import photo1 from "../images/Main.jpg";
import photo2 from "../images/Hockey.jpg";
import photo3 from "../images/Main.jpg";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { image_number: 1 };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ image_number: ((this.state.image_number + 1) % 3) + 1 });
    }

    render() {
        let photo;

        switch (this.state.image_number) {
            case 1:
                photo = photo1;
                break;
            case 2:
                photo = photo2;
                break;
            case 3:
                photo = photo3;
                break;
        }
        return <ImageUI src={photo} />;
    }
}

export default Clock;
