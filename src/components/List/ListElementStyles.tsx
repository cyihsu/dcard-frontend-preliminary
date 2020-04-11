import styled from "@emotion/styled";

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
  cursor: pointer;
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
  *:not(:first-child)::before {
    content: "・";
    margin-left: 0.1rem;
  }
`;

export const ListFooter = styled.div`
  color: rgba(0, 0, 0, 0.35);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  grid-area: footer / footer / footer / footer;
  overflow: hidden;
`;

export const ListMain = styled.div`
  grid-area: main / main / main / main;
  overflow: hidden;
`;

export const ListTitle = styled.h2`
  padding-bottom: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ListExcerpt = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
