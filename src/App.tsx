import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { Route, Switch, useParams } from "react-router-dom";

// Extracted from original chunks
import "./assets/App.css";
import MainFrame from "./components/Frame/MainFrame";

import { UIContext } from "./contexts/UIContext";
import { useRemoteList } from "./hooks/useRemoteList";
import { useRemotePost } from "./hooks/useRemotePost";

const Nav = React.lazy(() =>
  import(/* webpackChunkName: "Nav" */ "./components/Nav")
);
const List = React.lazy(() =>
  import(/* webpackChunkName: "List" */ "./components/List")
);
const Modal = React.lazy(() =>
  import(/* webpackChunkName: "Post" */ "./components/Post")
);

const GlobalWrapper = styled.div`
  background-color: var(--global-background-color);
  width: 100vw;
  height: 100vh;
`;

function Forum() {
  const { dispatch } = React.useContext(UIContext);
  const { forum } = useParams();
  const [PostList, hasNextPage, triggerCursor, appendResult] = useRemoteList(
    forum || ""
  );

  const handleScroll = ({ scrollOffset }: any) => {
    // Reduce Reducer Calls
    dispatch({
      type: scrollOffset > 0 ? "USER_NOT_AT_TOP" : "USER_AT_TOP",
    });
  };

  // Avoid the whole frame being rerendered, only rerender on data changed
  const memList = React.useMemo(
    () => (
      <Suspense fallback={<div />}>
        <List
          data={PostList}
          hasNextPage={hasNextPage}
          isLoadingMore={triggerCursor}
          loadMore={appendResult}
          handleScroll={handleScroll}
        />
      </Suspense>
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
  const [isDark, setDark] = React.useState<boolean>(false);
  const Post = useRemotePost(state.currentPost);

  const toggleDark = () => setDark((s) => !s);

  return (
    <GlobalWrapper className={isDark ? "dark" : ""}>
      <Suspense fallback={<div />}>
        <Nav
          toggleNav={state.listScrolled || state.toggleModal}
          toggleDark={toggleDark}
        />
      </Suspense>
      <Suspense fallback={<div />}>
        <Modal data={Post || undefined} />
      </Suspense>
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
