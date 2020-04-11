import React from "react";
import styled from "@emotion/styled";

const MainFrameStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const MainFrame: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return <MainFrameStyle>{children}</MainFrameStyle>;
};

export default MainFrame;
