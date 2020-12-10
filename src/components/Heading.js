import React from "react";
import {
  HeadingContainer,
  FunctionalMenu,
  Header,
} from "../styles/HeadingUI";
import Clock from "./HeadingImage";

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
