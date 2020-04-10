import React from "react";
import styled from "styled-components";

const ListElementStyle = styled.article`
  display: block;
  margin: 0px 40px;
  padding: 20px;
  border-bottom: 1px solid rgb(233, 233, 233);
  transition: 300ms all;
  :hover {
    transform: scale(1.05);
  }
`;

export default function () {
  return <ListElementStyle>sds</ListElementStyle>;
}
