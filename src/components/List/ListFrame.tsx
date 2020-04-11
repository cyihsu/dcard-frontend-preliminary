import React from "react";
import styled from "@emotion/styled";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";

import ListElements from "./ListElements";
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

export default function ({ data, isLoadingMore, loadMore }: any) {
  const { state, dispatch } = React.useContext(UIContext);

  const itemCount = data ? data.length + 1 : 0;
  const loadMoreItems = isLoadingMore ? () => {} : loadMore;
  const isItemLoaded = (index: number) => index < data.length;

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
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <List
                itemCount={itemCount}
                itemSize={180}
                height={height}
                width={width}
                ref={ref}
                onItemsRendered={onItemsRendered}
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
          </InfiniteLoader>
        )}
      </AutoSizer>
    </ListFrame>
  );
}
