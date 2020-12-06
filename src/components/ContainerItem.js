import React from "react";
import {EntityContainer} from "../styles/ContainerItemUI";
import Card from "./Card";
import {Flipper, Flipped} from "react-flip-toolkit";

const ContainerItem = ({goods}) => {
    return (
        <Flipper flipKey={goods}>
            <EntityContainer>
                {goods.map((hockeypuck) => {
                    return (
                        <Flipped key={hockeypuck.id} flipId={hockeypuck.id}>
                            <div>
                                <Card hockeypuck={hockeypuck}/>
                            </div>
                        </Flipped>
                    );

                })
                }
            </EntityContainer>
        </Flipper>
    );
};

export default ContainerItem;
