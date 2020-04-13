import React from "react";
import { Post } from "../types/Post";
import { jsonFetcher } from "../utils/fetch";
import REMOTE_CONSTS from "../remote.json";
import { UIContext } from "../contexts/UIContext";

export function useRemotePost(postID?: string) {
  const [data, setData] = React.useState<Post[]>([]);
  const { dispatch } = React.useContext(UIContext);

  React.useEffect(() => {
    if (postID) {
      const URL = REMOTE_CONSTS.POST_ENDPOINT + postID;
      jsonFetcher(URL).then((result) => {
        setData(result);
        dispatch({
          type: "OPEN_MODAL",
          payload: { attr: "post", value: postID },
        });
      });
    } else {
      setData([]);
    }
  }, [postID, dispatch]);

  return [data];
}
