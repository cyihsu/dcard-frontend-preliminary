import React from "react";
import { jsonFetcher } from "../utils/fetch";
import { MediaDetail } from "../types/CommonTypes";

export function useRemoteMedia(mediaLink?: string) {
  const [data, setData] = React.useState<MediaDetail>();

  React.useEffect(() => {
    if (mediaLink?.length) {
      const URL = mediaLink;
      jsonFetcher(URL).then(async (result) => {
        await setData(result);
      });
    } else {
      setData(undefined);
    }
  }, [mediaLink]);

  return data;
}
