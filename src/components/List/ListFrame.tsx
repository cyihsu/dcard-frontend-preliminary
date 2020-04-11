import React from "react";
import styled from "@emotion/styled";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import useSWR from "swr";

import ListElements from "./ListElements";
import REMOTE_CONSTS from "../../remote.json";
import { PostList } from "../../types/PostList";
import { jsonFetcher } from "../../utils/fetch";
import { UIContext } from "../../contexts/UIContext";

const ListFrame = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 800px;
  @media (max-width: 800px) {
    width: 98vw;
  }
`;

export default function () {
  const { data } = useSWR<PostList[]>(REMOTE_CONSTS.POPULAR_LIST, jsonFetcher);
  const { state, dispatch } = React.useContext(UIContext);

  const virtualRow = ({ index, style }: any) => (
    <div
      style={{
        ...style,
        top: `${parseFloat(style.top) + 90}px`,
      }}
    >
      <ListElements content={data && data[index]} />
    </div>
  );

  return (
    <ListFrame>
      <AutoSizer>
        {({ height, width }) => (
          <List
            itemCount={data?.length || 0}
            itemSize={160}
            height={height}
            width={width}
            onScroll={({ scrollOffset }) => {
              // Reduce Reducer Calls
              // prettier-ignore
              if (state.listScrolled !== (scrollOffset > 0)) {
                dispatch({
                  type: scrollOffset > 0 ? "USER_NOT_AT_TOP" : "USER_AT_TOP",
                });
              }
            }}
          >
            {virtualRow}
          </List>
        )}
      </AutoSizer>
    </ListFrame>
  );
}
