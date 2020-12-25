import styled from "styled-components";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

export const CardUI = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 160px;
  margin: 0 auto;
  padding-right: 20px;
  border: 1px solid black;
   border-radius: 30px;
  margin-bottom: 20px;
  position: relative;
   background: #AFEEEE;
`;

export const CardImage = styled.img`
  height: 100px;
  width: 100px;
  margin-left: 10px;
  border: 10px solid black; 
    box-shadow: 0 0 7px #666;
`;

export const TextUI = styled.p`
  font-size: 24px;
  color: #00000;
  text-align: center;
  margin: 0;
`;

export const StyledCounter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
  margin-left: 100px;
`;

export const PlusUI = styled(PlusSquareOutlined)`
  font-size: 32px;
  color: #00000;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;

export const MinusUI = styled(MinusSquareOutlined)`
  font-size: 32px;
  color: #00000;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;

export const Cross = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 45px;
  color: #00000;
`;

export const ButtonSmall = styled(Button)`
  border: none;
  background-color: transparent;
  width: 32px;
  margin: auto 0;
  padding: 0;
`;
