import React from "react";
import { jsonFetcher } from "../utils/fetch";
import REMOTE_CONSTS from "../constants/remote.json";
import { MediaDetail } from "../types/CommonTypes";

export function useRemoteMedia(mediaID?: string) {
  const [data, setData] = React.useState<MediaDetail>();

  React.useEffect(() => {
    if (mediaID?.length) {
      const URL = REMOTE_CONSTS.POST_ENDPOINT + mediaID;
      jsonFetcher(URL).then((result) => {
        setData(result.json());
      });
    } else {
      setData(undefined);
    }
  }, [mediaID]);

  return data;
}
