import React from "react";

import Clock from "./HeadingImage";
import {FunctionalMenu, Header, HeadingContainer} from "../styles/HeadingUI";


const Heading = () => {
    return (
        <HeadingContainer>
            <Clock/>
            <FunctionalMenu>
                <Header>You can shop it
                    <p>
                        Our company is popular between famous hockey players
                        <p>from all over the world,</p>
                        You can rely on us!
                    </p>
                </Header>
            </FunctionalMenu>
        </HeadingContainer>
    );
};

export default Heading;
