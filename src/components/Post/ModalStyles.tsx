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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 22px 60px;
  justify-content: space-between;
`;

export const ModalHeaderItem = styled.div`
  display: flex;
  div {
    padding-left: 1rem;
  }
`;

export const MockLogo = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: var(--dcard-corp-color);
  display: inline-block;
`;

export const ModalUserIdentity = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
