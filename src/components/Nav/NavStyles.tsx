import { css } from "@emotion/core";

export const NavWrapper = (changeColor: boolean) =>
  css({
    backgroundColor: changeColor ? "transparent" : "var(--nav-background)",
    width: "100vw",
    maxWidth: "100%",
    height: "64px",
    top: 0,
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    transition: "all 300ms ease-in",
    img: {
      display: "inline-block",
      height: "100%",
      maxHeight: "64px",
      padding: "1.1rem",
      filter: changeColor ? "var(--svg-white)" : "var(--svg-colored)",
    },
    willChange: "background-color, filter",
    "@media (max-width: 1100px)": {
      backgroundColor: "var(--nav-background)",
      zIndex: 10,
      img: {
        filter: "var(--svg-colored)",
      },
    },
  });

export const NavInnerWrapper = css({
  display: "flex",
  width: "100%",
  maxWidth: "1100px",
  justifyContent: "space-between",
});
