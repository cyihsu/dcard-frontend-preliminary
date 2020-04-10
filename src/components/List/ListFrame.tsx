import React from "react";
import styled from "@emotion/styled";
import ListElements from "./ListElements";
import useSWR from "swr";
import REMOTE_CONSTS from "../../remote.json";
import { PostList } from "../../types/PostList";
import { jsonFetcher } from "../../utils/fetch";

const ListFrame = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: calc(100% - 80px);
  margin: 0px 12px;
  border-radius: 4px 4px 0px 0px;
  width: 800px;
`;

export default function () {
  const { data, error } = useSWR<PostList[]>(
    REMOTE_CONSTS.POPULAR_LIST,
    jsonFetcher
  );
  if (data) console.log(data);
  return (
    <ListFrame>
      {data && data.map((element: any) => <ListElements content={element} />)}
    </ListFrame>
  );
}
