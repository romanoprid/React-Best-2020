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
                cover={<CardImage alt="Hockeypuck" src={hockeypuck.image}/>}
            >
                <Footer>
                    <MetaUI title={hockeypuck.name}/>
                    <TextUI>Price: {hockeypuck.priceInUAH} ₴</TextUI>
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
            <MoreInfo height={visible}>
                <MetaUI description={description(hockeypuck)}/>
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
