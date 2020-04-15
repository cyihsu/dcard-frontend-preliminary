import React from "react";
import { Reaction, ReactionTypes } from "../../types/CommonTypes";
import {
  ListEntity,
  ReactionWrap,
  ReactionListWrap,
  ReactionsElement,
} from "./ListElementStyles";
import reactionTypesRaw from "../../constants/reactions.json";

const reactionTypes: Map<string, ReactionTypes> = new Map();
reactionTypesRaw.forEach((reaction: ReactionTypes) =>
  reactionTypes.set(reaction.id, reaction)
);

const ListReaction: React.FC<{
  id: number;
  reactions: Reaction[];
  likeCount: number;
}> = ({ id, reactions, likeCount }) => {
  return (
    <React.Fragment>
      <ReactionListWrap>
        {reactions.map(
          (reaction, index) =>
            index < 3 && (
              <div key={`tooltip-${id}-${reaction.id}`}>
                <ReactionWrap
                  data-for={`tooltip-${id}-${reaction.id}`}
                  data-tip={`${reactionTypes.get(reaction.id)?.name} ${
                    reaction.count
                  }`}
                >
                  <ReactionsElement src={reactionTypes.get(reaction.id)?.url} />
                </ReactionWrap>
              </div>
            )
        )}
      </ReactionListWrap>
      <ListEntity>{likeCount}</ListEntity>
    </React.Fragment>
  );
};

export default ListReaction;
