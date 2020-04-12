import React from "react";
import styled from "@emotion/styled";

// Extracted from original chunks
import "./App.css";
import List from "./components/List";
import MainFrame from "./components/Frame/MainFrame";
import Nav from "./components/Nav";

import { UIContextProvider } from "./contexts/UIContext";
import { PostList } from "./types/PostList";
import { jsonFetcher } from "./utils/fetch";
import REMOTE_CONSTS from "./remote.json";

const GlobalWrapper = styled.div`
  background-color: var(--global-background-color);
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [data, setData] = React.useState<PostList[]>([]);
  const [cursor, setCursor] = React.useState<number>();
  const [triggerCursor, setTriggerFlag] = React.useState<boolean>();

  const appendResult = React.useCallback(() => {
    setTriggerFlag(true);
  }, []);

  React.useEffect(() => {
    if (triggerCursor) {
      const URL = data?.length
        ? REMOTE_CONSTS.INFINITE_SCROLL + cursor
        : REMOTE_CONSTS.POPULAR_LIST;
      jsonFetcher(URL).then((result) => {
        setData([...data, ...result]);
        setCursor(result[result.length - 1].id);
      });
      setTriggerFlag(false);
    }
  }, [triggerCursor]);

  return (
    <GlobalWrapper>
      <UIContextProvider>
        <Nav />
        <MainFrame>
          <List
            data={data}
            isLoadingMore={triggerCursor}
            loadMore={appendResult}
          />
        </MainFrame>
      </UIContextProvider>
    </GlobalWrapper>
  );
}

export default App;
