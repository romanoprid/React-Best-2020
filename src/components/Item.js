import React, {useState, useEffect, useRef} from "react";
import {
    BottomPart,
    ItemInfo,
    StyledItem,
    StyledPrice,
    TopPart,
    ButtonItemUI,
    DividerUI,
    NameUI,
    DescriptionUI,

} from "../styles/ItemUI";
import {data} from "./List";
import {useLocation, Redirect} from "react-router-dom";
import {Image} from "antd";
import description from "./UtilsInfo";

const Item = () => {
    const [item, setItem] = useState({});
    const [redirect, setRedirect] = useState(false);

    const location = useLocation();
    const totalPrice = useRef(null);


    useEffect(() => {
        window.scrollTo(0, 0);
        const id = parseInt(location.search.split("=")[1]);
        const foundItem = data.find((element) => element.id === id);
        setItem(foundItem);
        totalPrice.current = foundItem.priceInUAH;
    }, []);


    return (
        <StyledItem>
            <TopPart>
                <Image src={item.image}/>
                <ItemInfo>
                    <NameUI>{item.name}</NameUI>
                    <DescriptionUI>{description(item)}</DescriptionUI>

                </ItemInfo>
            </TopPart>
            <BottomPart>
                <StyledPrice>Price: {totalPrice.current} ₴</StyledPrice>
                <ButtonItemUI
                    onClick={() => setRedirect(true)}
                >
                    Back
                </ButtonItemUI>
                {redirect && <Redirect push to="/catalog"/>}
                <ButtonItemUI>
                    Add to Cart
                </ButtonItemUI>
            </BottomPart>
        </StyledItem>
    );
};

export default Item;
