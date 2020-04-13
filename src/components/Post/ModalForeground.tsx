/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { UIContext } from "../../contexts/UIContext";

const ModalFrame = (displayState: boolean) =>
  css({
    visibility: displayState ? "visible" : "hidden",
    height: "100vh",
    width: "780px",
    borderRadius: "8px",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 20,
    opacity: displayState ? 1 : 0,
    backgroundColor: `white`,
    transition: "all 300ms ease-in",
  });

export default function () {
  const { state } = React.useContext(UIContext);

  return <div css={ModalFrame(state.toggleModal)}>dasd</div>;
}
