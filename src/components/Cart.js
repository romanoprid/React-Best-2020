import React from "react";
import AddedCard from "./AddedCard";
import {
    CartContainer,
    TitleStyled,
    TotalPriceSyled,
    ButtonOnCart,
    Footer,
} from "../styles/CartUI";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const Cart = () => {
    let history = useHistory();
    const select = useSelector((state) => state);

    const handleClick = () => {
        console.log(select);
    };

    return (
        <CartContainer>
            <TitleStyled>🛒</TitleStyled>
            {select.orders.map((value) => {
                return <AddedCard value={value}/>;
            })}

            <Footer>
                <ButtonOnCart onClick={history.goBack}>Back</ButtonOnCart>
                <ButtonOnCart onClick={handleClick}>Next</ButtonOnCart>
            </Footer>
        </CartContainer>
    );
};

export default Cart;
