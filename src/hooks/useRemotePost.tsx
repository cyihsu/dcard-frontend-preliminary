import React from "react";
import { Post } from "../types/Post";
import { jsonFetcher } from "../utils/fetch";
import REMOTE_CONSTS from "../remote.json";

export function useRemotePost(postID?: number) {
  const [data, setData] = React.useState<Post>();

  React.useEffect(() => {
    if (postID) {
      const URL = REMOTE_CONSTS.POST_ENDPOINT + postID;
      jsonFetcher(URL).then((result) => {
        setData(result);
      });
    } else {
      setData(undefined);
    }
  }, [postID]);

  return data;
}
