import React, {useState, useEffect, useRef} from "react";
import {
    BottomPart,
    ItemInfo,
    StyledItem,
    StyledPrice,
    TopPart,
    ButtonItemUI,
    NameUI,
    DescriptionUI,

} from "../styles/ItemUI";
import {useLocation, useHistory} from "react-router-dom";
import {Image} from "antd";
import description from "./UtilsInfo";
import {fetchDataById, patchData} from "../AlmostCRUD";
import LoadPrewiew from "./LoadPreview";
import {useDispatch} from "react-redux";
import {createItem} from "./redux/Action";

const Item = () => {
    const [item, setItem] = useState({});
    const dispatch = useDispatch()
    const location = useLocation();
    const totalPrice = useRef(null);

    let history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);

        const id = parseInt(location.search.split("=")[1]);
        fetchDataById(id)
            .then(([foundItem]) => {
                setItem(foundItem);
                patchData(foundItem);
            })
            .catch(() => {
                console.log("Error download");
            });
    }, []);

    useEffect(() => {
        if (item === undefined) {
            return;
        }
        totalPrice.current = item.price_in_uah;
    }, [item]);


    const goToCard = () => {
        dispatch(
            createItem({
                id: item.id,
                name: item.name,
                price_in_uah: totalPrice.current,
                imageSrc: item.imageSrc,
                number: 1,
            })
        );
    };

    if (Object.keys(item).length === 0) {
        return <LoadPrewiew/>;
    }

    return (
        <StyledItem>
            <TopPart>
                <Image src={item.imageSrc}/>
                <ItemInfo>
                    <NameUI>{item.name}</NameUI>

                    <DescriptionUI>{description(item)}</DescriptionUI>

                </ItemInfo>
            </TopPart>
            <BottomPart>
                <StyledPrice>Price: {item.price_in_uah} ₴</StyledPrice>
                <ButtonItemUI
                    onClick={history.goBack}
                >
                    Back
                </ButtonItemUI>

                <ButtonItemUI onClick={goToCard}>

                    Add to Cart
                </ButtonItemUI>
            </BottomPart>
        </StyledItem>
    );
};

export default Item;
