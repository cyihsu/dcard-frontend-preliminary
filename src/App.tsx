import React from "react";
import styled from "@emotion/styled";

// Extracted from original chunks
import "./assets/App.css";
import List from "./components/List";
import MainFrame from "./components/Frame/MainFrame";
import Nav from "./components/Nav";

import { useRemoteList } from "./hooks/useRemoteList";
import Modal from "./components/Post";

const GlobalWrapper = styled.div`
  background-color: var(--global-background-color);
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [data, hasNextPage, triggerCursor, appendResult] = useRemoteList();
  // Avoid the whole frame being rerendered, only rerender on data changed
  const memedList = React.useMemo(
    () => (
      <List
        data={data}
        hasNextPage={hasNextPage}
        isLoadingMore={triggerCursor}
        loadMore={appendResult}
      />
    ),
    // Trigger update only on data changed
    // Remark: might lead to stale closures, see facebook/cra issue #6880
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );

  return (
    <GlobalWrapper>
      <Nav />
      <Modal />
      <MainFrame>{memedList}</MainFrame>
    </GlobalWrapper>
  );
}

export default App;
