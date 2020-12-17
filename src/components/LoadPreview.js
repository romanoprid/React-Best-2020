import React, { useEffect, useState } from "react";
import LoadingElement from "./Loading";
import { CenterContainer, MessegeInfo } from "../styles/LoadPreview.UI";

const LoadPrewiew = ({
  title = "Not Found",
  description = "Please try again later",
}) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setLoad(true);
    }, 5000);
    return function cleanUp() {
      clearTimeout(myTimeout);
    };
  }, []);
  if (!load) {
    return <LoadingElement />;
  }
  return (
    <CenterContainer>
      <MessegeInfo>{title}</MessegeInfo>
      <MessegeInfo>{description}</MessegeInfo>
    </CenterContainer>
  );
};

export default LoadPrewiew;
