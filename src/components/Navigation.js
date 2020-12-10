import React from "react";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Item from "./Item";
import Footer from "./Footer";
import {
  MenuUI,
  MenuItem,
  LogoImage,
  ContainerUI,
} from "../styles/NavigationUI";
import logo from "../images/Logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

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
              <NavLink exact to="/card"
                       activeClassName="selected"
                       style={{textDecoration: "none", color: "white"}}>
                CART
              </NavLink>
            </MenuItem>
          </MenuUI>
          <Switch>
            <Route path="/catalog">
              <Catalog/>
            </Route>
            <Route path="/card">
              <div>Card</div>
            </Route>
            <Route path="/item">
              <Item/>
            </Route>


            <Route path="/">
              <Home/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </ContainerUI>
  );
};

export default Navigation;
