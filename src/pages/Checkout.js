import React from "react";
import {
  CartContainer,
  TitleStyled,
  FormStyled,
  ButtonForm,
  InputContainer,
  ButtonContainer,
} from "../styles/CheckoutUI";
import { Formik } from "formik";

import Input from "../components/Input";
import { useHistory } from "react-router-dom";
import { OrderSchema } from "../components/InputRules";
import { fetchDataById, patchData } from "../AlmostCRUD";
import { useDispatch, useSelector } from "react-redux";
import { resetItems } from "../components/redux/Action";

const Checkout = () => {
  let history = useHistory();
  const select = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <CartContainer>
      <TitleStyled>Please enter your information</TitleStyled>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: "",
        }}
        validationSchema={OrderSchema}
        onSubmit={(values) => {
          history.push("/success");
          select.orders.forEach((item) => {
            fetchDataById(item.id).then(([foundItem]) => {
              foundItem.bought++;
              patchData(foundItem);
            });
          });

          dispatch(resetItems);
        }}
      >
        {({ handleSubmit }) => (
          <FormStyled onSubmit={handleSubmit}>
            <InputContainer>
              <Input title="First Name" name="firstName" type="text" />
              <Input title="Last Name" name="lastName" type="text" />
              <Input title="Email" name="email" type="email" />
              <Input
                title="Phone Number"
                name="phoneNumber"
                type="text"
              />
              <Input title="Address" name="address" type="text" />
            </InputContainer>
            <ButtonContainer>
              <ButtonForm  onClick={history.goBack}> Back</ButtonForm>

              <ButtonForm onClick={handleSubmit}>Continue</ButtonForm>
            </ButtonContainer>
          </FormStyled>
        )}
      </Formik>
    </CartContainer>
  );
};

export default Checkout;
