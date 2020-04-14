/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Post } from "../../types/Post";
import { ModalInner } from "./ModalStyles";
import {
  ListExcerpt,
  ListHeader,
  ListForumName,
  ListEntity,
  ListMain,
  ListTitle,
} from "../List/ListElementStyles";
import { dateStringToChinese } from "../../utils/dateString";
import { UIContext } from "../../contexts/UIContext";

const ModalContent: React.FC<{ content: Post }> = ({ content }) => {
  const { dispatch } = React.useContext(UIContext);
  const toggleForum = () => {
    dispatch({
      type: "SET_CURRENT_FORUM",
      payload: { attr: "forum", value: content.forumAlias },
    });
    dispatch({
      type: "CLOSE_MODAL",
    });
  };
  return (
    <ModalInner>
      <ListHeader>
        <ListForumName onClick={toggleForum}>{content.forumName}</ListForumName>
        <ListEntity>{content.school ? content.school : "匿名"}</ListEntity>
        <ListEntity>
          {content && dateStringToChinese(content.createdAt)}
        </ListEntity>
      </ListHeader>
      <ListMain>
        <ListTitle>{content.title}</ListTitle>
        <ListExcerpt>
          <span>{content.excerpt}</span>
        </ListExcerpt>
      </ListMain>
    </ModalInner>
  );
};

export default ModalContent;
