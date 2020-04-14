import React from "react";
import styled from "@emotion/styled";

// Extracted from original chunks
import "./assets/App.css";
import List from "./components/List";
import MainFrame from "./components/Frame/MainFrame";
import Nav from "./components/Nav";

import { useRemoteList } from "./hooks/useRemoteList";
import Modal from "./components/Post";
import { UIContext } from "./contexts/UIContext";
import { useRemotePost } from "./hooks/useRemotePost";

const GlobalWrapper = styled.div`
  background-color: var(--global-background-color);
  width: 100vw;
  height: 100vh;
`;

function App() {
  const { state } = React.useContext(UIContext);
  const [PostList, hasNextPage, triggerCursor, appendResult] = useRemoteList(
    state.currentForum
  );
  const [Post] = useRemotePost(state.currentPost);
  // Avoid the whole frame being rerendered, only rerender on data changed
  const memList = React.useMemo(
    () => (
      <List
        data={PostList}
        hasNextPage={hasNextPage}
        isLoadingMore={triggerCursor}
        loadMore={appendResult}
      />
    ),
    // Trigger update only on data changed
    // Remark: might lead to stale closures, see facebook/cra issue #6880
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [PostList]
  );

  return (
    <GlobalWrapper>
      <Nav />
      <Modal data={Post[0]} />
      <MainFrame>{memList}</MainFrame>
    </GlobalWrapper>
  );
}

export default App;
