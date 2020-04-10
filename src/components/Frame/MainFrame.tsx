import React from "react";
import styled from "styled-components";

const MainFrameStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

const MainFrame: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return <MainFrameStyle>{children}</MainFrameStyle>;
};

export default MainFrame;
