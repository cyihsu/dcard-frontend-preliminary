import React from "react";
import styled from "styled-components";
import { PostList } from "../../types/PostList";
import { dateStringToChinese } from "../../utils/dateString";

const ListElementStyle = styled.article`
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
  margin-top: 20px;
  background: #fff;
  -webkit-tap-highlight-color: transparent;
  :hover {
    background-color: #fafafa;
    transform: scale(1.01);
    box-shadow: #006aa6 5px 5px;
  }
  transition: 300ms all;
`;

const ListHeader = styled.div`
  grid-area: header / header / header / header;
`;

const ListMain = styled.div`
  grid-area: main / main / main / main;
  overflow: hidden;
`;

const ListTitle = styled.h2`
  padding-bottom: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ListExcerpt = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ListElement: React.FC<{
  content: PostList;
}> = ({ content }) => {
  return (
    <ListElementStyle>
      <ListHeader>
        <p>{dateStringToChinese(content.createdAt)}</p>
      </ListHeader>
      <ListMain>
        <ListTitle>{content.title}</ListTitle>
        <ListExcerpt>
          <span>{content.excerpt}</span>
        </ListExcerpt>
      </ListMain>
    </ListElementStyle>
  );
};

export default ListElement;
