import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const ModalBackground = (displayState: boolean) =>
  css({
    visibility: displayState ? "visible" : "hidden",
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
    opacity: displayState ? 0.5 : 0,
    backgroundColor: "rgb(0, 0, 0)",
    transition: "all 300ms ease-in-out",
  });

export const ModalFrame = (displayState: boolean) =>
  css({
    visibility: displayState ? "visible" : "hidden",
    height: "90vh",
    width: "100%",
    maxWidth: "1000px",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    zIndex: 20,
    opacity: displayState ? 1 : 0,
    backgroundColor: `white`,
    transition: "all 300ms ease-in-out",
    "@media (max-width: 1000px)": {
      height: "100vh",
      borderRadius: 0,
    },
  });

export const ModalInner = styled.article`
  display: grid;

  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-columns: 1fr fit-content(84px);
  grid-row-gap: 24px;
  height: 100%;
  width: 100%;
  padding: 5rem;
  display: block;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;
