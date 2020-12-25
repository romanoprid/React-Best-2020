import React from "react";

import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import AddedCard from "../components/AddedCard";
import {ButtonOnCart, CartContainer, Footer, TitleStyled} from "../styles/CartUI";

const Cart = () => {
    let history = useHistory();
    const select = useSelector((state) => state);


    return (
        <CartContainer>
            <TitleStyled>🛒</TitleStyled>
            {select.orders.map((value) => {
                return <AddedCard value={value}/>;
            })}
      <Footer>
        <ButtonOnCart onClick={history.goBack}>Back</ButtonOnCart>
        <ButtonOnCart onClick={() => history.push("/checkout")}>
          Next
        </ButtonOnCart>
      </Footer>
    </CartContainer>
  );
};

export default Cart;
