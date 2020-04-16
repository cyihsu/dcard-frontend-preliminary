import { css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";

export const fadeIn = keyframes`
  from {
    transform: translate3d(-50%, 50%, 0);
  }
  to {
    transform: translate3d(-50%, -50%, 0);
  }
`;

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
    backgroundColor: "var(--font-color)",
    transition: "all 300ms ease-in-out",
    willChange: "visibility, opacity",
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
    backgroundColor: `var(--pure-background)`,
    animation: `${displayState ? fadeIn : null} 300ms ease`,
    transition: "all 300ms ease-in-out",
    willChange: "visibility, opacity",
    "@media (max-width: 1000px)": {
      height: "100vh",
      borderRadius: 0,
    },
  });

export const ModalInner = styled.article`
  height: 100%;
  width: 100%;
  display: flex;
  padding-left: 60px;
  padding-right: 60px;
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
  padding: 0px;
  padding-top: 22px;
  justify-content: space-between;
`;

export const ModalHeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    padding-left: 1rem;
  }
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0px;
  position: relative;
  bottom: 0;
  justify-content: flex-start;
`;

export const ModalFooterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const ModalContentWrap = styled.div`
  overflow: auto;
  min-height: calc(80vh - 122px);
`;

export const ModalTitle = styled.div`
  padding: 16px 0px;
`;

export const ModalTopics = styled.ul`
  display: flex;
  li {
    padding: 8px 16px;
    background: rgb(239, 239, 239);
    margin: 4px;
    border-radius: 12px;
  }
`;

export const ModalTopicsWrapper = styled.div`
  padding-top: 10px;
  display: inline-block;
`;
