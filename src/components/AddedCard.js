import React, {useEffect, useState} from "react";
import {
    CardUI,
    MinusStyled,
    PlusStyled,
    CardImage,
    TextStyled,
    StyledCounter,
    Cross,
    ButtonSmall,
} from "../styles/ReservedItemUI";
import {useDispatch} from "react-redux";
import {
    deleteItem,
    updateItem,
} from "./redux/Action";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const AddedCard = ({value}) => {
    const [item, setElement] = useState(value);
    const dispatch = useDispatch();
    useEffect(() => {
        setElement(value);
    }, [value]);
    const reduceItemNumber = () => {
        if (item.number === 1) {
            return;
        }
        const newElement = {
            ...item,
            number: item.number - 1,
            price_in_uah: (item.price_in_uah / item.number) * (item.number - 1),
        };
        setElement(newElement);
        dispatch(updateItem(newElement));
    };

    const increaseItemNumber = () => {
        if (item.number === 20) {
            return;
        }
        const newElement = {
            ...item,
            number: item.number + 1,
            price_in_uah: (item.price_in_uah / item.number) * (item.number + 1),
        };
        setElement(newElement);
        dispatch(updateItem(newElement));
    };

    const removeElement = () => {
        dispatch(deleteItem(item));
    };

    return (
        <CardUI>
            <Cross onClick={removeElement} icon={faTimes}/>
            <CardImage alt="COMING SOON" src={item.imageSrc}/>
            <TextStyled>{item.name}</TextStyled>
            <StyledCounter>
                <ButtonSmall onClick={increaseItemNumber}>
                    <PlusStyled/>
                </ButtonSmall>
                <TextStyled>{item.number}</TextStyled>
                <ButtonSmall>
                    <MinusStyled onClick={reduceItemNumber}/>
                </ButtonSmall>
            </StyledCounter>
            <TextStyled>{item.price_in_uah} ₴</TextStyled>
        </CardUI>
    );
};

export default AddedCard;
