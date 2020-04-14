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
    backgroundColor: `rgb(0, 0, 0, ${displayState ? 0.5 : 0})`,
    transition: "background-color 300ms ease-in",
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
    transition: "opacity 300ms ease-in",
  });

export const ModalInner = styled.div`
  height: 100%;
  width: 100%;
  padding: 24px;
  display: block;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;
