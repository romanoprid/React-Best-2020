import React from "react";
import { CartContainer, ButtonSuccess } from "../styles/SuccessUI";
import { Result } from "antd";
import { useHistory } from "react-router-dom";

const Success = () => {
  let history = useHistory();
  return (
    <CartContainer>
      <Result
        status="success"
        title="Purchased"
        subTitle="We will recall you soon"
        extra={[
          <ButtonSuccess onClick={() => history.push("/catalog")}>
            Catalog
          </ButtonSuccess>,
        ]}
      />
    </CartContainer>
  );
};

export default Success;
