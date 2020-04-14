/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Post } from "../../types/Post";
import { UIContext } from "../../contexts/UIContext";
import { useKeyPressed } from "../../hooks/useKeyPressed";
import { ModalFrame, ModalBackground } from "./ModalStyles";
import ModalContent from "./ModalContent";
import ModalLoader from "./ModalLoader";

const Modal: React.FC<{ data?: Post }> = ({ data }) => {
  const { state, dispatch } = React.useContext(UIContext);
  const key = useKeyPressed("Escape");

  const handleClick = React.useCallback(
    () => dispatch({ type: "CLOSE_MODAL" }),
    [dispatch]
  );

  React.useEffect(() => {
    state.toggleModal && key && handleClick();
  }, [key, state, handleClick]);

  return (
    <React.Fragment>
      <div css={ModalFrame(state.toggleModal)}>
        {data ? <ModalContent content={data} /> : <ModalLoader />}
      </div>
      <div css={ModalBackground(state.toggleModal)} onClick={handleClick} />
    </React.Fragment>
  );
};

export default Modal;
