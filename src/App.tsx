import React from "react";
import styled from "@emotion/styled";

// Extracted from original chunks
import "./App.css";
import PostList from "./components/List";
import MainFrame from "./components/Frame/MainFrame";
import Nav from "./components/Nav";
import { UIContextProvider } from "./contexts/UIContext";

const GlobalWrapper = styled.div`
  background-color: var(--global-background-color);
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <GlobalWrapper>
      <UIContextProvider>
        <Nav />
        <MainFrame>
          <PostList />
        </MainFrame>
      </UIContextProvider>
    </GlobalWrapper>
  );
}

export default App;
