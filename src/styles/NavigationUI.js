import styled from "styled-components";

export const MenuUI = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
    width: 100%;
  height: 100px;
  margin: 0 auto;
  padding-right: 300px;
  padding-left: 300px;
  background-color: black;

`;

export const MenuItem = styled.li`
  font-size: 17px;
  color: #313943;
  padding-top: 15px;
  padding-bottom: 0px;
  margin-bottom: 12px;
  padding-left: 10px;
  margin-left: 34px;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  list-style: none;
  a {
    text-transform: uppercase;
  }
  :hover {
    color: #333;
    text-shadow: #595959 4px 0 10px;
  }
  .selected {
    text-shadow: none;
  }
`;

export const LogoImage = styled.img`
  position: absolute;
  left: 100px;
  top: 0px;
  display: inline;
  height:50px
  width: 100px;
  z-index: 3;
`;

export const ContainerUI = styled.section``;
