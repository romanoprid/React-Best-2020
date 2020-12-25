import React, {useState, useEffect, useContext} from "react";

import {Menu} from "antd";
import ElementsContext from "../components/Context";
import {CatalogState} from "../components/Source";
import {changeCatalogState, executeFilters, findBy} from "../components/Utils";
import {AutoCompleteUI, MenuItemUI, MenuUI, ViewComponent} from "../styles/CatalogUI";
import LoadPrewiew from "../components/LoadPreview";
import ContainerItem from "../components/ContainerItem";



const {SubMenu} = Menu;

const Catalog = () => {
  const {source} = useContext(ElementsContext);
  let data = source;
  const [selectedKeys, setSelectedKeys] = useState(Object.values(CatalogState));
  const [goods, setGoods] = useState([...data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setGoods(source);
  }, [source]);

  const handleInput = (sample) => {
    data = findBy(sample, source);
    setGoods(executeFilters(CatalogState, data));
  };

  const handleClick = (e) => {
    console.log(e);
    let CatalogState = changeCatalogState(e);
    setSelectedKeys(Object.values(CatalogState));
    setGoods(executeFilters(CatalogState, data));
  };

  const resetDefault = (e) => {
    let props = {
      key: "default",
      item: {props: {subMenuKey: e.item.props.subMenuKey}},
    };
    if (e.item.props.subMenuKey === "view-menu-") {
      props.key = "card";
    }
    handleClick(props);
  };

  console.log(goods);
  return (
      <ViewComponent>
        <MenuUI
            multiple
            onSelect={handleClick}
            onDeselect={resetDefault}
            selectedKeys={selectedKeys}
            mode="horizontal"
        >
          <SubMenu
              key="sort"
              title="Sort by"
          >
            <Menu.Item key="highPrice">Highest Price</Menu.Item>

          </SubMenu>

          <MenuItemUI key="search">
            <AutoCompleteUI
                style={{width: 200}}
                placeholder="Search"
                filterOption={(inputValue, option) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                    -1
                }
                onSearch={handleInput}
            />
          </MenuItemUI>
        </MenuUI>
        {goods.length !== 0 ? (
            <ContainerItem goods={goods} currentView={CatalogState.currentView}/>
        ) : (
            <LoadPrewiew/>
        )}
      </ViewComponent>
  );
};

export default Catalog;
