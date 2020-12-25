import React, { useEffect, useState } from "react";
import {
  CardUI,
  MinusUI,
  PlusUI,
  CardImage,
  TextUI,
  StyledCounter,
  Cross,
  ButtonSmall,
} from "../styles/AddedCardUI";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  updateItem,
} from "./redux/Action";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const AddedCard = ({ value }) => {
  const [element, setElement] = useState(value);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    setElement(value);
  }, [value]);

  const reduceItemNumber = (event) => {
    event.stopPropagation();
    if (element.number === 1) {
      return;
    }
    const newElement = {
      ...element,
      number: element.number - 1,
      price_in_uah: (element.price_in_uah / element.number) * (element.number - 1),
    };
    setElement(newElement);
    dispatch(updateItem(newElement));
  };

  const increaseItemNumber = (event) => {
    event.stopPropagation();
    if (element.number === 20) {
      return;
    }
    const newElement = {
      ...element,
      number: element.number + 1,
      price_in_uah: (element.price_in_uah / element.number) * (element.number + 1),
    };
    setElement(newElement);
    dispatch(updateItem(newElement));
  };

  const removeElement = (event) => {
    event.stopPropagation();
    dispatch(deleteItem(element));
  };

  const goToItem = () => {
    history.push(`/item?id=${element.id}`);
  };

  return (
    <CardUI onClick={goToItem}>
      <Cross onClick={removeElement} icon={faTimes} />
      <CardImage alt="COMING SOON" src={element.imageSrc} />
      <TextUI>{element.name}</TextUI>
      <StyledCounter>
        <ButtonSmall onClick={increaseItemNumber}>
          <PlusUI />
        </ButtonSmall>
        <TextUI>{element.number}</TextUI>
        <ButtonSmall>
          <MinusUI onClick={reduceItemNumber} />
        </ButtonSmall>
      </StyledCounter>
      <TextUI>{element.price_in_uah} UAH</TextUI>
    </CardUI>
  );
};

export default AddedCard;
