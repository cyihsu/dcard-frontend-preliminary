import styled from "@emotion/styled";

export const ListFrameWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 800px;
  @media (max-width: 800px) {
    width: 98vw;
  }
`;

export const ListElementWrapperStyle = styled.div`
  padding-right: 10px;
  padding-left: 10px;
`;

export const ListElementInnerStyle = styled.article`
  display: grid;

  grid-template-areas:
    "header header"
    "main thumb"
    "footer thumb";
  grid-template-columns: 1fr fit-content(84px);
  grid-row-gap: 12px;
  border-radius: 8px;
  padding: 20px 40px;
  background: var(--pure-background);
  -webkit-tap-highlight-color: transparent;
  :hover {
    background-color: var(--hover-background);
    transform: scale(1.01);
    box-shadow: var(--dcard-corp-color) 5px 5px;
  }
  @media (max-width: 800px) {
    padding: 20px 20px;
  }
  transition: 300ms all;
`;

export const ListForumName = styled.div`
  border-radius: 12px;
  padding: 0.2rem 0.4rem;
  background-color: var(--dcard-corp-color);
  color: white;
  cursor: pointer;
`;

export const ListEntity = styled.div`
  border-radius: 12px;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  grid-area: header / header / header / header;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  div:not(:first-of-type)::before {
    content: "・";
    margin-left: 0.1rem;
  }
`;

export const ListFooter = styled.div`
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  grid-area: footer / footer / footer / footer;
  overflow: hidden;
`;

export const ListMain = styled.div`
  grid-area: main / main / main / main;
  overflow: hidden;
  cursor: pointer;
`;

export const ListTitle = styled.h2`
  padding-bottom: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ListThumb = styled.img`
  object-fit: cover;
  margin-left: 20px;
  grid-area: thumb / thumb / thumb / thumb;
  overflow: hidden;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-image: initial;
`;

export const ListExcerpt = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ReactionWrap = styled.span`
  display: block;
  height: 20px;
  width: 20px;
  margin-left: -4px;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  :hover {
    transform: scale(1.3);
  }
  transition: 300ms all;
`;

export const ReactionListWrap = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
  align-items: center;
`;

export const ReactionsElement = styled.img`
  width: 100%;
  height: 100%;
`;
