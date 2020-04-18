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
        {["webp, jpeg"].map((filetype) => {
          const typeKey = filetype === "jpeg" ? "." + filetype : "";
          return (
            <source
              key={`${origin}`}
              type={`image/${filetype}`}
              srcSet={`${source.links[`160${typeKey}`].url} 120w, ${
                source.links[`full${typeKey}`].url
              } 440w`}
            />
          );
        })}
        <img src={source.url} alt={source.url} width="100%" loading="lazy" />
      </picture>
    </div>
  ) : (
    <div />
  );
}
