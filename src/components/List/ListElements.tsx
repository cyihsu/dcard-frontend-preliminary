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
import ListLoader from "./ListLoader";
import { useRemotePost } from "../../hooks/useRemotePost";
import { UIContext } from "../../contexts/UIContext";

const ListElement: React.FC<{
  content?: PostList;
}> = ({ content }) => {
  const [currentPostId, setCurrentPost] = React.useState<string>("");
  const { dispatch } = React.useContext(UIContext);
  const [post] = useRemotePost(currentPostId);

  return content ? (
    <ListElementWrapperStyle>
      <ListElementInnerStyle>
        <ListHeader>
          <ListForumName
            onClick={() => {
              dispatch({
                type: "SET_CURRENT_FORUM",
                payload: { attr: "forum", value: content.forumAlias },
              });
            }}
          >
            {content.forumName}
          </ListForumName>
          <ListEntity>{content.school ? content.school : "匿名"}</ListEntity>
          <ListEntity>
            {content && dateStringToChinese(content.createdAt)}
          </ListEntity>
        </ListHeader>
        <ListMain
          onClick={() => {
            setCurrentPost(content.id.toString());
          }}
        >
          <ListTitle>{content.title}</ListTitle>
          <ListExcerpt>
            <span>{content.excerpt}</span>
          </ListExcerpt>
        </ListMain>
        <ListFooter>
          <ListEntity>{content.likeCount}</ListEntity>
          <ListEntity>回應 {content.commentCount}</ListEntity>
        </ListFooter>
        {content.media?.length ? (
          <ListThumb
            src={content.media[0].url}
            width="84px"
            height="84px"
            alt=""
            loading="lazy"
          />
        ) : undefined}
      </ListElementInnerStyle>
    </ListElementWrapperStyle>
  ) : (
    <ListElementWrapperStyle>
      <ListElementInnerStyle>
        <ListLoader />
      </ListElementInnerStyle>
    </ListElementWrapperStyle>
  );
};

export default ListElement;
