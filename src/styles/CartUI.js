import styled from "styled-components";
import { ButtonUI } from "./CardUI";

export const CartContainer = styled.section`
  width:100%
  max-width: 1360px;
  margin: 0 auto;
  background: #B0C4DE;
`;

export const TitleStyled = styled.h1`
  font-size: 41px;
  letter-spacing: 13px;
  text-transform: uppercase;
  padding-top: 100px;
  padding-bottom: 50px;
  color: #00000;
  text-align: center;
`;

export const TotalPriceSyled = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 30px;
  margin-right: 120px;
  color: #00000;
  text-align: end;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px auto;
  max-width: 1160px;
`;

export const ButtonOnCart = styled(ButtonUI)`
  width: 200px;
  margin: 0px;
`;
