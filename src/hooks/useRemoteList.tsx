import React from "react";

import { PostList } from "../types/PostList";
import { jsonFetcher } from "../utils/fetch";
import REMOTE_CONSTS from "../remote.json";

export function useRemoteList(board?: string) {
  const [data, setData] = React.useState<PostList[]>([]);
  const [cursor, setCursor] = React.useState<number>();
  const [triggerCursor, setTriggerFlag] = React.useState<boolean>();
  const [initFlag, setInit] = React.useState<boolean>(false);

  // Set for calling from outside
  const appendResult = () => setTriggerFlag(true);

  React.useEffect(() => {
    if (triggerCursor) {
      console.log(triggerCursor, cursor, board);
      const forumString =
        REMOTE_CONSTS.POPULAR_LIST + (board ? `&forum=${board}` : "");
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
  }, [triggerCursor, cursor]);

  return [data, cursor !== -1, triggerCursor, appendResult];
}
