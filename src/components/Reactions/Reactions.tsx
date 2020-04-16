import React from "react";
import { Reaction, ReactionTypes } from "../../types/CommonTypes";
import {
  ReactionWrap,
  ReactionListWrap,
  ReactionsElement,
} from "./ReactionStyles";
import reactionTypesRaw from "../../constants/reactions.json";

const reactionTypes: Map<string, ReactionTypes> = new Map();
reactionTypesRaw.forEach((reaction: ReactionTypes) =>
  reactionTypes.set(reaction.id, reaction)
);

const Reactions: React.FC<{
  id: number;
  reactions: Reaction[];
}> = ({ id, reactions }) => {
  return (
    <React.Fragment>
      <ReactionListWrap>
        {reactions.map((reaction, index) => {
          if (index < 3) {
            const tmpReaction = reactionTypes.get(reaction.id);
            return (
              <div key={`tooltip-${id}-${reaction.id}`}>
                <ReactionWrap
                  data-for={`tooltip-${id}-${reaction.id}`}
                  data-tip={`${tmpReaction?.name} ${reaction.count}`}
                >
                  <ReactionsElement
                    src={tmpReaction?.url}
                    alt={tmpReaction?.name}
                  />
                </ReactionWrap>
              </div>
            );
          } else {
            return <div key={`tooltip-${id}-${reaction.id}`} />;
          }
        })}
      </ReactionListWrap>
    </React.Fragment>
  );
};

export default Reactions;
