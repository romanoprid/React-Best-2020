import styled from "styled-components";
import {Menu, AutoComplete} from "antd";

export const ViewComponent = styled.section`
  max-width: 1360px;
  margin: 0 auto;
  background: #B0C4DE;

`;

export const AutoCompleteUI = styled(AutoComplete)``;

export const MenuUI = styled(Menu)`
  display: flex;
  width: auto;
  margin-top: 0px;
  background: aqua;
`;

export const MenuItemUI = styled(Menu.Item)`
  margin-left: 400px;
`;
