import React from "react";
import { MediaMeta } from "../../types/CommonTypes";
import Picture from "../Media/Picture";
import { ModalImage } from "./ModalStyles";

function ModalContentMedia({ queryKey, mediaMeta }: any) {
  const parseKey: number = mediaMeta.findIndex(
    (meta: MediaMeta) => meta.url === queryKey
  );

  if (parseKey !== -1) {
    switch (mediaMeta[parseKey].type) {
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
    return queryKey.endsWith(".jpg") ? (
      <ModalImage src={queryKey} alt={queryKey} />
    ) : (
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

export default ModalContentMedia;
