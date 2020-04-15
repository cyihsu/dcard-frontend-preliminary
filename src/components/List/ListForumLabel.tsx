import React from "react";
import { useHistory } from "react-router-dom";
import { ListForumName } from "./ListElementStyles";

const ListForumLabel: React.FC<{
  id: number;
  forumName: string;
  forumAlias: string;
}> = ({ id, forumName, forumAlias }) => {
  const history = useHistory();
  const toggleForum = () => {
    history.push(`/f/${forumAlias}`);
  };

  return (
    <React.Fragment>
      <ListForumName
        onClick={toggleForum}
        data-for={`tooltip-${id}`}
        data-tip={`前往 ${forumName}版`}
      >
        {forumName}
      </ListForumName>
    </React.Fragment>
  );
};

export default ListForumLabel;
