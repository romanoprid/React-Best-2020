import React, {useState, useEffect} from "react";
import {data as sourceData} from "../components/List";
import ContainerItem from "../components/ContainerItem";
import {executeFilters} from "../components/CatalogSort";
import {Menu} from "antd";
import {
    ViewComponent,
    AutoCompleteUI,
    MenuUI,
    MenuItemUI,
} from "../styles/CatalogUI";


let data = sourceData;
const {SubMenu} = Menu;

const options = [
    {value: "Hockey"},

];

const CatalogState = {
    currentView: "card",
    sortType: "default",
    filterPrice: "default",
};

const Catalog = () => {
    const [selectedKeys, setSelectedKeys] = useState(Object.values(CatalogState));
    const [goods, setGoods] = useState([...data]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInput = (sample) => {
        sample = sample.toLowerCase();
        let resultList = [];
        sourceData.forEach((item) => {
            switch (true) {

                case item.name.toLowerCase().includes(sample):
                    resultList.push(item);
                    break;
            }
        });
        data = resultList;
        if (sample == "") {
            data = sourceData;
        }
        setGoods(executeFilters(CatalogState, data));
    };

    const handleClick = (e) => {
        console.log(e);
        switch (e.item.props.subMenuKey) {
            case "sort-menu-":
                CatalogState.sortType = e.key;
                break;
            case "filterPrice-menu-":
                CatalogState.filterPrice = e.key;
                break;

        }
        setSelectedKeys(Object.values(CatalogState));
        setGoods(executeFilters(CatalogState, data));
    };

    const resetDefault = (e) => {
        let props = {};
        if (e.item.props.subMenuKey === "view-menu-") {
            props = {
                key: "card",
                item: {props: {subMenuKey: e.item.props.subMenuKey}},
            };
        } else {
            props = {
                key: "default",
                item: {props: {subMenuKey: e.item.props.subMenuKey}},
            };
        }
        handleClick(props);
    };

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
                        options={options}
                        placeholder="Search"
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                            -1
                        }
                        onSearch={handleInput}
                    />
                </MenuItemUI>
            </MenuUI>
            <ContainerItem goods={goods} currentView={CatalogState.currentView}/>
        </ViewComponent>
    );
};

export default Catalog;
