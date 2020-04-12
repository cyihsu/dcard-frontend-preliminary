import { css } from "@emotion/core";

export const NavWrapper = (changeColor: boolean) =>
  css({
    backgroundColor: changeColor ? "transparent" : "var(--dcard-corp-color)",
    height: "64px",
    top: 0,
    width: "100%",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    transition: "300ms all",
    img: {
      display: "inline-block",
      height: "100%",
      maxHeight: "64px",
      objectFit: "cover",
      padding: "1.1rem",
      filter: changeColor ? "var(--svg-white)" : "var(--svg-colored)",
    },
    "@media (max-width: 1000px)": {
      backgroundColor: "var(--dcard-corp-color)",
      zIndex: 10,
      img: {
        filter: "var(--svg-colored)",
      },
    },
  });

export const NavInnerWrapper = css({
  width: "1100px",
  display: "flex",
  alignItems: "flex-start",
  "@media (max-width: 1000px)": {
    width: "100%",
  },
});