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
  ListThumb,
} from "./ListElementStyles";
import { UIContext } from "../../contexts/UIContext";

const ListElement: React.FC<{
  content: PostList;
}> = ({ content }) => {
  const { state, dispatch } = React.useContext(UIContext);
  const togglePost = () => {
    if (!state.toggleModal) {
      dispatch({
        type: "OPEN_MODAL",
        payload: { attr: "post", value: content.id },
      });
    }
  };

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
    <ListElementWrapperStyle>
      <ListElementInnerStyle>
        <ListHeader>
          <ListForumName onClick={toggleForum}>
            {content.forumName}
          </ListForumName>
          <ListEntity>{content.school ? content.school : "匿名"}</ListEntity>
          <ListEntity>
            {content && dateStringToChinese(content.createdAt)}
          </ListEntity>
        </ListHeader>
        <ListMain onClick={togglePost}>
          <ListTitle>{content.title}</ListTitle>
          <ListExcerpt>
            <span>{content.excerpt}</span>
          </ListExcerpt>
        </ListMain>
        <ListFooter>
          <ListEntity>{content.likeCount}</ListEntity>
          <ListEntity>回應 {content.commentCount}</ListEntity>
        </ListFooter>
        {content.media[0] && (
          <ListThumb
            src={content.media[0].url}
            alt=""
            width="84px"
            height="84px"
            loading="lazy"
          />
        )}
      </ListElementInnerStyle>
    </ListElementWrapperStyle>
  );
};

export default ListElement;
