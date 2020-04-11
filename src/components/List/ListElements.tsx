import React from "react";
import { PostList } from "../../types/PostList";
import { dateStringToChinese } from "../../utils/dateString";
import {
  ListElementWrapperStyle,
  ListElementInnerStyle,
  ListHeader,
  ListForumName,
  ListEntity,
  ListMain,
  ListTitle,
  ListExcerpt,
  ListFooter,
} from "./ListElementStyles";

const ListElement: React.FC<{
  content?: PostList;
}> = ({ content }) => {
  return (
    <ListElementWrapperStyle>
      <ListElementInnerStyle>
        <ListHeader>
          <ListForumName>{content?.forumName}</ListForumName>
          <ListEntity>{content?.school ? content?.school : "匿名"}</ListEntity>
          <ListEntity>
            {content && dateStringToChinese(content?.createdAt)}
          </ListEntity>
        </ListHeader>
        <ListMain>
          <ListTitle>{content?.title}</ListTitle>
          <ListExcerpt>
            <span>{content?.excerpt}</span>
          </ListExcerpt>
        </ListMain>
        <ListFooter>
          <ListEntity>{content?.likeCount}</ListEntity>
        </ListFooter>
      </ListElementInnerStyle>
    </ListElementWrapperStyle>
  );
};

export default ListElement;
