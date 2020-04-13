import React from "react";
import styled from "@emotion/styled";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";

import ListElements from "./ListElements";
import { UIContext } from "../../contexts/UIContext";
import ListLoader from "./ListLoader";

const ListFrameWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 800px;
  @media (max-width: 800px) {
    width: 98vw;
  }
`;

function ListFrame({ data, hasNextPage, isLoadingMore, loadMore }: any) {
  const { state, dispatch } = React.useContext(UIContext);

  const itemCount = hasNextPage ? data.length + 1 : data.length;
  const loadMoreItems = isLoadingMore ? () => {} : loadMore;
  const isItemLoaded = (index: number) => !hasNextPage || index < data.length;

  const virtualRow = ({ index, style }: any) => (
    <div
      style={{
        ...style,
        top: `${parseFloat(style.top) + 90}px`,
      }}
    >
      {data[index] ? <ListElements content={data[index]} /> : <ListLoader />}
    </div>
  );

  return (
    <ListFrameWrapper>
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
            // If threshold too high, might trigger duplicated request on initial parse
            threshold={8}
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
    </ListFrameWrapper>
  );
}

ListFrame.whyDidYouRender = true;

export default ListFrame;
