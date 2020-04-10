import React from "react";
import styled from "styled-components";
import ListElements from "./ListElements";
import latest from "../../mocks/latest.json";

const ListFrame = styled.div`
  padding-top: 20px;
  min-height: calc(100% - 80px);
  margin: 0px 12px;
  border-radius: 4px 4px 0px 0px;
  width: 800px;
`;

export default function () {
  return (
    <ListFrame>
      {latest.map((element: any) => (
        <ListElements content={element} />
      ))}
    </ListFrame>
  );
}
