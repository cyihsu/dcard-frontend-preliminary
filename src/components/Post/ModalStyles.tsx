import { css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";

export const fadeIn = keyframes`
  from {
    transform: translate3d(0%, 50%, 0);
  }
  to {
    transform: translate3d(0%, 0%, 0);
  }
`;

export const ModalBackground = (displayState: boolean) =>
  css({
    visibility: displayState ? "visible" : "hidden",
    height: "100vh",
    width: "100vw",
    maxHeight: "100%",
    maxWidth: "100%",
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
  padding: 0px 60px;
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
  padding: 22px 0px;
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

export const ModalUserIdentity = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ModalContentWrap = styled.div`
  overflow: auto;
`;

export const ModalTitle = styled.div``;

export const ModalTopics = styled.ul`
  li {
    display: inline-block;
    cursor: pointer;
    padding: 8px 16px;
    background: rgb(239, 239, 239);
    margin: 4px;
    border-radius: 12px;
    a {
      color: inherit;
      text-decoration: inherit;
    }
  }
`;

export const ModalTopicsWrapper = styled.div`
  padding-top: 10px;
  display: inline-block;
`;

export const toggleTitle = (inView: boolean) =>
  css({
    transform: inView ? "transformY(-175%)" : "transformY(0%)",
    visibility: inView ? "visible" : "hidden",
    transition: "all 1.0s cubic-bezier(0.19, 1, 0.22, 1)",
  });

export const ModalImage = styled.img`
  max-height: 50vh;
  max-width: 90vw;
`;

export const ModalWrapper = css({
  display: "flex",
  height: "100vh",
  width: "100vw",
  maxWidth: "100%",
  maxHeight: "100%",
  alignItems: "center",
  justifyContent: "center",
});

export const ModalEntity = styled.span`
  border-radius: 12px;
  img {
    filter: var(--svg-white);
  }
`;
