import React from "react";
import { Media, MediaDetail } from "../../types/CommonTypes";
import { useRemoteMedia } from "../../hooks/useRemoteMedia";

function ModalContentMedia({ queryKey, media, mediaMeta }: any) {
  const parseKey: number = media.findIndex((o: Media) => o.url === queryKey);
  if (parseKey !== -1) {
    console.log(parseKey);
    return <div />;
  } else {
    return (
      <a
        href={queryKey}
        target="_blank"
        rel="noopener"
        style={{ fontSize: "18px" }}
      >
        {queryKey}
      </a>
    );
  }
}

export default ModalContentMedia;
