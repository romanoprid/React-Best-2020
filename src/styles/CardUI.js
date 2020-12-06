import styled from "styled-components";
import {Card, Button} from "antd";

const {Meta} = Card;

export const Footer = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  margin: 10px 27px;
  padding: 10px;
  height: 345px;
  width: 272px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CardUI = styled(Card)`
  width: 680px;
  height: 400px;
  display: flex;
  background: #AFEEEE;
  margin-bottom: 10px;
`;

export const ButtonUI = styled(Button)`
  background: black;
  border: 1px solid black;
   border-radius: 30px;
  text-transform: uppercase;
  text-align: center;
  font-size: 19px;
  line-height: inherit;
  color: #ffff;
  letter-spacing: 5px;
  width: 78%;
  height: 36px;
  margin: 0 auto;
  margin-left: 30px;
    :hover {
    border: 1px solid black;
    color: black;
  }
`;

export const CardImage = styled.img`
  height: 400px;
  width: 306px;
    border: 30px solid black; 
    box-shadow: 0 0 7px #666;
`;

export const MetaUI = styled(Meta)`
  font-size: 12px;
  text-align: center;
  color: black;
  margin-top: 14%;
`;

export const TextUI = styled.p`
  font-size: 23pt;
  color: black;
  text-align: center;
  letter-spacing: 5px;
  margin-top: 36%;
  margin-bottom: 0px;
`;

export const MoreInfo = styled.div`
  top: 20px;
  left: 360px;
  width: 262px;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  border-radius 30px;
  margin-top: 30px;
  height: ${(props) => (props.height ? "322px" : "0px")};
  max-width: 290px;
  transition: 0.6s;
  
`;

export const ButtonLessUI = styled(ButtonUI)`
  margin-bottom: 10px;
    :hover {
    border: 1px solid black;
    color: black;
  }
`;
