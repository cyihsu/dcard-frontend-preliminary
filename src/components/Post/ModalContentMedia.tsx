import React from "react";
import { MediaMeta } from "../../types/CommonTypes";
import Picture from "../Media/Picture";
import { ModalImage } from "./ModalStyles";

function ModalContentMedia({ queryKey, media, mediaMeta }: any) {
  let parseKey: number = -1;
  mediaMeta.forEach((meta: MediaMeta, index: number) => {
    if (meta.url === queryKey) {
      parseKey = index;
    }
  });
  if (parseKey !== -1) {
    switch (mediaMeta[parseKey].type) {
      case "image/thumbnail": {
        return <div />;
      }
      case "image/imgur": {
        return (
          <ModalImage
            src={mediaMeta[parseKey].thumbnail}
            alt={mediaMeta[parseKey].id}
          />
        );
      }
      case "image/megapx": {
        return <Picture origin={mediaMeta[parseKey].normalizedUrl} />;
      }
      case "video/vivid": {
        return <video src={mediaMeta[parseKey].url} controls />;
      }
      default:
        return <div />;
    }
  } else {
    if (queryKey.endsWith(".jpg")) {
      return <ModalImage src={queryKey} alt={queryKey} />;
    } else {
      return (
        <a
          href={queryKey}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "18px" }}
        >
          {queryKey}
        </a>
      );
    }
  }
}

export default ModalContentMedia;
