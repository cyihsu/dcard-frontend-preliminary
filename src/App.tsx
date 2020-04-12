import React from "react";
import styled from "@emotion/styled";

// Extracted from original chunks
import "./assets/App.css";
import List from "./components/List";
import MainFrame from "./components/Frame/MainFrame";
import Nav from "./components/Nav";

import { useRemoteList } from "./hooks/useRemoteList";
import ModalFrame from "./components/Post/ModalBackground";
import { UIContext } from "./contexts/UIContext";

const GlobalWrapper = styled.div`
  background-color: var(--global-background-color);
  width: 100vw;
  height: 100vh;
`;

function App() {
  const { state } = React.useContext(UIContext);
  const [data, hasNextPage, triggerCursor, appendResult] = useRemoteList(
    state.currentForum
  );

  return (
    <GlobalWrapper>
      <Nav />
      <ModalFrame />
      <MainFrame>
        <List
          data={data}
          hasNextPage={hasNextPage}
          isLoadingMore={triggerCursor}
          loadMore={appendResult}
        />
      </MainFrame>
    </GlobalWrapper>
  );
}

export default App;
