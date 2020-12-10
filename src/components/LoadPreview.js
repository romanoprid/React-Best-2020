import React, { useEffect, useState } from "react";
import LoadingElement from "./Loading";
import { CenterContainer, MessegeInfo } from "../styles/LoadPreviewUI";

const LoadPrewiew = ({
  name = "Nothing to show  🙁",
}) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setLoad(true);
    }, 5000);
    console.log(load);
    return function cleanUp() {
      clearTimeout(myTimeout);
    };
  }, []);
  if (!load) {
    return <LoadingElement />;
  }
  return (
    <CenterContainer>
      <MessegeInfo>{name}</MessegeInfo>
    </CenterContainer>
  );
};

export default LoadPrewiew;
