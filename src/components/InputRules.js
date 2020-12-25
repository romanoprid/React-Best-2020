import * as Yup from "yup";
export const OrderSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Your firstname is too short")
    .max(30, "Your firstname is too long")
    .required("This field can't be empty"),
  lastName: Yup.string()
    .min(2, "Your lastname is too short")
    .max(30, "Your lastname is too long")
    .required("This field can't be empty"),
  email: Yup.string().email("This email is invalid").required("This field can't be empty"),
  phoneNumber: Yup.string()
    .matches(
      /^((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{4}))$/g,
      "This phone number is invalid"
    )
    .required("This field can't be empty"),
  address: Yup.string()
    .min(2, "Your address is too short")
    .max(100, "Your address is too long")
    .required("This field can't be empty"),
});
