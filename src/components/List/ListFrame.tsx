import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";

import ListElements from "./ListElements";
import ListLoader from "./ListLoader";
import { ListFrameWrapper } from "./ListElementStyles";

function ListFrame({
  data,
  hasNextPage,
  isLoadingMore,
  loadMore,
  handleScroll,
}: any) {
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
                onScroll={handleScroll}
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

export default ListFrame;
