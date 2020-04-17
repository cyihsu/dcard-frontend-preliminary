import React from "react";
import { useParams, useHistory } from "react-router-dom";
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
import ListForumLabel from "./ListForumLabel";
import Reactions from "../Reactions";

const ListElement: React.FC<{
  content: PostList;
}> = ({ content }) => {
  const history = useHistory();
  const { forum } = useParams();
  const togglePost = () => {
    history.push(`${forum ? "/f/" + forum : ""}/p/${content.id.toString()}`);
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
            src={content.media[0].url.replace(/^http:\/\//i, "https://")}
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
