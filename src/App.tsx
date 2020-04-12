import React from "react";
import styled from "@emotion/styled";

// Extracted from original chunks
import "./assets/App.css";
import List from "./components/List";
import MainFrame from "./components/Frame/MainFrame";
import Nav from "./components/Nav";

import { UIContextProvider } from "./contexts/UIContext";
import { useRemoteList } from "./hooks/useRemoteList";

const GlobalWrapper = styled.div`
  background-color: var(--global-background-color);
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [currentBoard] = React.useState("");
  const [data, hasNextPage, triggerCursor, appendResult] = useRemoteList(
    currentBoard
  );

  return (
    <GlobalWrapper>
      <UIContextProvider>
        <Nav />
        <MainFrame>
          <List
            data={data}
            hasNextPage={hasNextPage}
            isLoadingMore={triggerCursor}
            loadMore={appendResult}
          />
        </MainFrame>
      </UIContextProvider>
    </GlobalWrapper>
  );
}

export default App;
