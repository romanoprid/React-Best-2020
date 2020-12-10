import React, {useContext, useEffect, useState} from "react";
import {
  ContainerCards,
  TitleUI,
  ButtonUI,
  CatalogContainer,
} from "../styles/HomeCatalogUI";
import ContainerItem from "./ContainerItem";
import ElementsContext from "./Context";


const HomeCatalog = () => {
  const { source } = useContext(ElementsContext);
  useEffect(() => {
    setData(source.slice(0, 2));
  }, [source]);
  const [data, setData] = useState(source.slice(0, 2));
  const [isShowMore, setIsShowMore] = useState(false);

  const showMore = () => {
    setData(source);
    setIsShowMore(true);
  };

  const showLess = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
    console.log(window);

    setData(source.slice(0, 2));
    setIsShowMore(false);
  };

  return (
      <CatalogContainer>
        <TitleUI>₴ BEST PRICE ₴</TitleUI>
        <ContainerCards>
          <ContainerItem goods={data} currentView="card"/>
        </ContainerCards>
        {!isShowMore && (
            <ButtonUI onClick={() => showMore()}>View More</ButtonUI>
        )}
        {isShowMore && <ButtonUI onClick={showLess}>View Less</ButtonUI>}
      </CatalogContainer>
  );
};

export default HomeCatalog;
