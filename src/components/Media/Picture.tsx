/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useRemoteMedia } from "../../hooks/useRemoteMedia";

const Picture = css({
  width: "auto",
  maxWidth: "100%",
  maxHeight: "50vh",
  height: "auto",
  display: "inline-block",
});

export default function ({ origin }: any) {
  const source = useRemoteMedia(origin);

  return source ? (
    <div>
      <picture css={Picture}>
        <source
          type="image/webp"
          srcSet={`${source.links["160.webp"].url} 120w,${source.links["320.webp"].url} 240w,${source.links["full.webp"].url} 440w`}
        />
        <source
          type="image/jpeg"
          srcSet={`${source.links["160"].url} 120w,${source.links["320"].url} 240w,${source.links["full"].url} 440w`}
        />
        <img src={source.url} alt={source.url} width="100%" loading="lazy" />
      </picture>
    </div>
  ) : (
    <div />
  );
}
