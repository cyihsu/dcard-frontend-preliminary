import React from "react";
import styled from "@emotion/styled";
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

const ListForumName = styled.div`
  border-radius: 12px;
  padding: 0.2rem 0.4rem;
  background-color: #006aa6;
  color: white;
`;

const ListEntity = styled.div`
  border-radius: 12px;
`;

const ListHeader = styled.div`
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

const ListFooter = styled.div`
  color: rgba(0, 0, 0, 0.35);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  grid-area: footer / footer / footer / footer;
  overflow: hidden;
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
        <ListForumName>{content.forumName}</ListForumName>
        <ListEntity>{content.school ? content.school : "匿名"}</ListEntity>
        <ListEntity>{dateStringToChinese(content.createdAt)}</ListEntity>
      </ListHeader>
      <ListMain>
        <ListTitle>{content.title}</ListTitle>
        <ListExcerpt>
          <span>{content.excerpt}</span>
        </ListExcerpt>
      </ListMain>
      <ListFooter>
        <ListEntity>{content.likeCount}</ListEntity>
      </ListFooter>
    </ListElementStyle>
  );
};

export default ListElement;
