/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Post } from "../../types/Post";
import { UIContext } from "../../contexts/UIContext";
import { useKeyPressed } from "../../hooks/useKeyPressed";
import { ModalFrame, ModalBackground } from "./ModalStyles";
import ModalContent from "./ModalContent";
import ModalLoader from "./ModalLoader";
import { useHistory, useParams } from "react-router";

const Modal: React.FC<{ data?: Post }> = ({ data }) => {
  const { state } = React.useContext(UIContext);

  const history = useHistory();
  const { forum } = useParams();
  const key = useKeyPressed("Escape");

  const handleClick = React.useCallback(() => {
    history.push(forum ? `/f/${forum}` : "/");
  }, [forum, history]);

  React.useEffect(() => {
    state.toggleModal && key && handleClick();
  }, [key, state, handleClick]);

  return (
    <React.Fragment>
      <div css={ModalFrame(state.toggleModal)}>
        {data ? (
          <ModalContent content={data} handleClick={handleClick} />
        ) : (
          <ModalLoader />
        )}
      </div>
      <div css={ModalBackground(state.toggleModal)} onClick={handleClick} />
    </React.Fragment>
  );
};

export default Modal;
