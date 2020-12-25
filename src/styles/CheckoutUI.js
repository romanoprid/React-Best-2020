import styled from "styled-components";
import {Form} from "formik";
import {ButtonUI} from "./CardUI";

export const CartContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TitleStyled = styled.h1`
  font-size: 41px;
  letter-spacing: 13px;
  text-transform: uppercase;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #020243;
  text-align: center;
`;

export const FormStyled = styled(Form)`
  padding-bottom: 0px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    border: 1px solid black;
   border-radius: 30px;
  flex-wrap: wrap;
  height: 500px;
  background: #AFEEEE;
`;

export const Input = styled.div`
margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 1200px;
  margin: 50px auto;
`;

export const ButtonForm = styled(ButtonUI)`
  width: 200px;
`;
