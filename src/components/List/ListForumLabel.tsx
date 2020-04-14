import React from "react";
import ReactTooltip from "react-tooltip";

import { ListForumName } from "./ListElementStyles";
import { UIContext } from "../../contexts/UIContext";

const ListForumLabel: React.FC<{
  id: number;
  forumName: string;
  forumAlias: string;
}> = ({ id, forumName, forumAlias }) => {
  const { dispatch } = React.useContext(UIContext);
  const toggleForum = () => {
    dispatch({
      type: "SET_CURRENT_FORUM",
      payload: { attr: "forum", value: forumAlias },
    });
    dispatch({
      type: "CLOSE_MODAL",
    });
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
      <ReactTooltip id={`tooltip-${id}`} className="tooltip" />
    </React.Fragment>
  );
};

export default ListForumLabel;
