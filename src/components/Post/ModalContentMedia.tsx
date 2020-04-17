import React from "react";
import { MediaMeta } from "../../types/CommonTypes";
import Picture from "../Media/Picture";
import { ModalImage } from "./ModalStyles";

function ModalContentMedia({ queryKey, mediaMeta }: any) {
  const parseKey: number = mediaMeta.findIndex(
    (meta: MediaMeta) => meta.url === queryKey
  );

  const dataType = (type: string) => {
    switch (type) {
      case "image/imgur":
        return (
          <ModalImage
            src={mediaMeta[parseKey].thumbnail}
            alt={mediaMeta[parseKey].id}
          />
        );
      case "image/megapx":
        return <Picture origin={mediaMeta[parseKey].normalizedUrl} />;
      case "video/vivid":
        return <video src={mediaMeta[parseKey].url} controls />;
      default:
        return <div />;
    }
  };

  return parseKey !== -1 ? (
    dataType(mediaMeta[parseKey].type)
  ) : queryKey.endsWith(".jpg") ? (
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

export default ModalContentMedia;
