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
  max-width: 100%;
  max-height: 100%;
`;

function Post() {
  const { state, dispatch } = React.useContext(UIContext);
  const { post } = useParams();
  const currentPost = useRemotePost(post ? parseInt(post, 10) : 0);

  React.useEffect(() => {
    if (post && parseInt(post, 10)) {
      dispatch({ type: "OPEN_MODAL" });
    } else if (state.toggleModal) {
      dispatch({ type: "CLOSE_MODAL" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post, state.toggleModal]);

  return React.useMemo(
    () => (
      <Suspense fallback={<div />}>
        <Modal data={currentPost} />
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

  const handleScroll = (scrollOffset: number) => {
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

  const toggleDark = React.useCallback(() => setDark((s) => !s), []);

  const routes = React.useMemo(
    () =>
      ["/", "/f/:forum", "/p/:post", "/f/:forum/p/:post"].map((routePath) => (
        <Route exact path={routePath}>
          <Post />
          <Forum />
        </Route>
      )),
    []
  );
  React.useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setDark(true)
      : setDark(false);
  }, []);

  return (
    <GlobalWrapper className={isDark ? "dark" : ""}>
      <Suspense fallback={<div />}>
        <Nav
          toggleNav={state.listScrolled || state.toggleModal}
          toggleDark={toggleDark}
        />
      </Suspense>
      <Switch>{routes}</Switch>
    </GlobalWrapper>
  );
}

export default App;
