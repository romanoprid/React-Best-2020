import React from "react";
import {
  ErrorUI,
  InputContainer,
  InputUI,
} from "../styles/InputUI";
import { Field, ErrorMessage } from "formik";

const Input = ({ title, name, type }) => {
  return (
    <InputContainer>
      {title}:
      <Field id={name} name={name} type={type} as={InputUI} />
      <ErrorUI>
        <ErrorMessage name={name} />
      </ErrorUI>
    </InputContainer>
  );
};

export default Input;
