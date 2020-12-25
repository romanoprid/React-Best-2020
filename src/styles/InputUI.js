import styled from "styled-components";
import { Input } from "antd";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const InputUI = styled(Input)`
  margin: 20px;
  margin-bottom: 40px;
  width: 300px;
`;

export const ErrorUI = styled.div`
  position: absolute;
  color: red;
  font-size: 12px;
  top: 80px;
  left: 20px;
`;
