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

function Post() {
  const { state, dispatch } = React.useContext(UIContext);
  const { post } = useParams();
  const currentPost = useRemotePost(state.currentPost);

  React.useEffect(() => {
    if (post && parseInt(post, 10)) {
      dispatch({
        type: "OPEN_MODAL",
        payload: { attr: "post", value: parseInt(post, 10) },
      });
    } else {
      dispatch({ type: "CLOSE_MODAL" });
    }
  }, [post, dispatch]);
  return React.useMemo(
    () => (
      <Suspense fallback={<div />}>
        <Modal data={currentPost || undefined} />
      </Suspense>
    ),
    [currentPost]
  );
}

function Forum() {
  const { dispatch } = React.useContext(UIContext);
  const { forum } = useParams();
  const [PostList, hasNextPage, triggerCursor, appendResult] = useRemoteList(
    forum || ""
  );

  const handleScroll = ({ scrollOffset }: any) => {
    // Reduce Reducer Calls
    // prettier-ignore
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

  const toggleDark = () => setDark((s) => !s);

  return (
    <GlobalWrapper className={isDark ? "dark" : ""}>
      <Suspense fallback={<div />}>
        <Nav
          toggleNav={state.listScrolled || state.toggleModal}
          toggleDark={toggleDark}
        />
      </Suspense>
      <Switch>
        <Route exact path="/">
          <Post />
          <Forum />
        </Route>
        <Route exact path="/f/:forum">
          <Post />
          <Forum />
        </Route>
        <Route exact path="/p/:post">
          <Post />
          <Forum />
        </Route>
        <Route exact path="/f/:forum/p/:post">
          <Post />
          <Forum />
        </Route>
      </Switch>
    </GlobalWrapper>
  );
}

export default App;
