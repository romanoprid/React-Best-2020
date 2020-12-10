import React, {useState} from "react";
import {
    Footer,
    CardUI,
    ButtonUI,
    CardImage,
    MetaUI,
    TextUI,
    MoreInfo,
    ButtonLessUI,
} from "../styles/CardUI";
import {useHistory} from "react-router-dom";
import description from "./UtilsInfo";

const Card = ({hockeypuck}) => {
    return (
        <div>
            <CardUI
                hoverable
                cover={<CardImage alt="COMING SOON" src={hockeypuck.imageSrc}/>}
            >
                <Footer>
                    <MetaUI title={hockeypuck.name}/>
                    <TextUI>Price: {hockeypuck.price_in_uah} ₴</TextUI>
                    <AllInfo hockeypuck={hockeypuck}/>
                </Footer>
            </CardUI>
        </div>
    );
};

export default Card;

const AllInfo = ({hockeypuck}) => {
    const [visible, setVisible] = useState(false);

    let history = useHistory();

    return (
        <div>
            <ButtonUI onClick={() => setVisible(true)}>View More</ButtonUI>
            <MoreInfo height={visible ? 1 : 0}>
                <MetaUI name={hockeypuck.name} description={description(hockeypuck)}/>
                <ButtonUI
                    onClick={() => {
                        history.push(`/item?id=${hockeypuck.id}`);
                    }}
                >
                    Open
                </ButtonUI>
                <ButtonLessUI
                    onClick={() => {
                        setVisible(false);
                    }}
                >
                    View Less
                </ButtonLessUI>
            </MoreInfo>
        </div>
    );
};
