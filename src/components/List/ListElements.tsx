import React from "react";
import { PostList } from "../../types/PostList";
import { dateStringToChinese } from "../../utils/dateString";
import {
  ListElementWrapperStyle,
  ListElementInnerStyle,
  ListHeader,
  ListEntity,
  ListMain,
  ListTitle,
  ListExcerpt,
  ListFooter,
  ListThumb,
} from "./ListElementStyles";
import { UIContext } from "../../contexts/UIContext";
import ListForumLabel from "./ListForumLabel";
import Reactions from "../Reactions";

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

  return (
    <ListElementWrapperStyle>
      <ListElementInnerStyle>
        <ListHeader>
          <ListForumLabel
            id={content.id}
            forumName={content.forumName}
            forumAlias={content.forumAlias}
          />
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
          <Reactions id={content.id} reactions={content.reactions} />
          <ListEntity>{content.likeCount}</ListEntity>
          <ListEntity style={{ paddingLeft: "1rem" }}>
            回應 {content.commentCount}
          </ListEntity>
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
