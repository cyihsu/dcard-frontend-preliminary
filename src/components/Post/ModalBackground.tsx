/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { UIContext } from "../../contexts/UIContext";

const ModalFrame = (displayState: boolean) =>
  css({
    visibility: displayState ? "visible" : "hidden",
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 5,
    backgroundColor: `rgb(0, 0, 0, ${displayState ? 0.8 : 0})`,
    transition: "all 300ms ease-in",
  });

export default function () {
  const { state, dispatch } = React.useContext(UIContext);
  return (
    <div
      css={ModalFrame(state.toggleModal)}
      onClick={() => {
        dispatch({ type: "CLOSE_MODAL" });
      }}
    />
  );
}
