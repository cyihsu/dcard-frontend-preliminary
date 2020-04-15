import React from "react";
import styled from "@emotion/styled";
import { Route, Switch, useParams } from "react-router-dom";

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

function Forum() {
  const { forum } = useParams();
  const [PostList, hasNextPage, triggerCursor, appendResult] = useRemoteList(
    forum || ""
  );

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

  return <MainFrame>{memList}</MainFrame>;
}

function App() {
  const { state } = React.useContext(UIContext);

  const Post = useRemotePost(state.currentPost);

  return (
    <GlobalWrapper>
      <Nav toggleNav={state.listScrolled || state.toggleModal} />
      <Modal data={Post || undefined} />
      <Switch>
        <Route exact path="/">
          <Forum />
        </Route>
        <Route path="/f/:forum">
          <Forum />
        </Route>
      </Switch>
    </GlobalWrapper>
  );
}

export default App;
