import React from "react";

import logo from "../images/Logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Checkout from "../pages/Checkout";
import Success from "../pages/Success";
import {ContainerUI, LogoImage, MenuUI,   MenuItem} from "../styles/NavigationUI";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Item from "../pages/Item";
import Home from "../pages/Home";
import Footer from "./Footer";

const Navigation = () => {
  return (
      <ContainerUI>
        <Router>
          <MenuUI>
            <LogoImage src={logo}/>

            <MenuItem>
              <NavLink
                  exact
                  to="/"
                  activeClassName="selected"
                  style={{textDecoration: "none", color: "white"}}
              >
                HOME
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                  exact
                  to="/catalog"
                  activeClassName="selected"
                  style={{textDecoration: "none", color: "white"}}
              >
                catalog
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to="/cart"
                       activeClassName="selected"
                       style={{textDecoration: "none", color: "white"}}>
                CART
              </NavLink>
            </MenuItem>
          </MenuUI>
        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/item">
            <Item />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ContainerUI>
  );
};

export default Navigation;
