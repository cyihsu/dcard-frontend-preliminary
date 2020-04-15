import React from "react";

import { PostList } from "../types/PostList";
import { jsonFetcher } from "../utils/fetch";
import REMOTE_CONSTS from "../constants/remote.json";
export function useRemoteList(forum: string) {
  const [data, setData] = React.useState<PostList[]>([]);
  const [cursor, setCursor] = React.useState<number>();
  const [triggerCursor, setTriggerFlag] = React.useState<boolean>();

  // Set for calling from outside
  const appendResult = () => setTriggerFlag(true);

  React.useEffect(() => {
    setData([]);
    setCursor(undefined);
  }, [forum]);

  React.useEffect(() => {
    if (triggerCursor) {
      const forumString =
        REMOTE_CONSTS.POPULAR_LIST + (forum.length ? `&forum=${forum}` : "");
      const URL = cursor ? forumString + `&before=${cursor}` : forumString;
      // Fetch
      jsonFetcher(URL).then((result) => {
        if (result.length > 0) {
          setData((d) => [...d, ...result]);
          setCursor(result[result.length - 1].id || -1);
        }
      });
      setTriggerFlag(false);
    }
  }, [triggerCursor, cursor, forum]);

  return [data, cursor !== -1, triggerCursor, appendResult];
}
