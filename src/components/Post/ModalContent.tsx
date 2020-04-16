/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Post } from "../../types/Post";
import {
  ModalInner,
  ModalHeader,
  ModalHeaderItem,
  MockLogo,
  ModalUserIdentity,
  ModalFooter,
  ModalContentWrap,
  ModalTitle,
  ModalTopics,
  ModalTopicsWrapper,
} from "./ModalStyles";
import { ListEntity } from "../List/ListElementStyles";
import { dateStringToChinese } from "../../utils/dateString";
import { contentPreprocess } from "../../utils/contentPreprocess";
import Reactions from "../Reactions/Reactions";
import ListForumLabel from "../List/ListForumLabel";
import ModalContentMedia from "./ModalContentMedia";

const ModalContent: React.FC<{ content: Post }> = ({ content }) => {
  return (
    <ModalInner>
      <ModalHeader>
        <ModalHeaderItem>
          <MockLogo />
          <ModalUserIdentity>
            <span style={{ fontSize: "16px" }}>
              {content.school ? content.school : "匿名"}
            </span>
            {content.department && (
              <span>
                <a href={`https://www.dcard.tw/${content.department}`}>
                  {content.department}
                </a>
              </span>
            )}
          </ModalUserIdentity>
        </ModalHeaderItem>
        <ListEntity></ListEntity>
      </ModalHeader>
      <ModalTitle>
        <h1>{content.title}</h1>
        <div style={{ paddingTop: "10px" }}>
          <ListForumLabel
            id={content.id}
            forumName={content.forumName}
            forumAlias={content.forumAlias}
          />
          <span style={{ paddingLeft: "1rem" }}>
            {content && dateStringToChinese(content.createdAt)}
          </span>
        </div>
      </ModalTitle>
      <ModalContentWrap>
        <div>
          {contentPreprocess(content.content).map((paragraph, index) => {
            if (paragraph.includes("http:") || paragraph.includes("https:")) {
              return (
                <ModalContentMedia
                  key={`paragraph${content.id}-${index}`}
                  queryKey={paragraph}
                  media={content.media || null}
                  mediaMeta={content.mediaMeta || null}
                />
              );
            } else {
              return (
                <span
                  key={`paragraph${content.id}-${index}`}
                  style={{
                    padding: "22px 0px",
                    display: "block",
                    fontSize: "18px",
                    lineHeight: 1.6,
                    overflowWrap: "break-word",
                  }}
                >
                  {paragraph}
                </span>
              );
            }
          })}
        </div>

        {content.topics && (
          <ModalTopicsWrapper>
            <ModalTopics>
              {content.topics.map((topic) => (
                <li key={`${content.id}-${topic}`}>{topic}</li>
              ))}
            </ModalTopics>
          </ModalTopicsWrapper>
        )}
      </ModalContentWrap>
      <ModalFooter>
        <Reactions id={content.id} reactions={content.reactions} />
        <ListEntity>{content.likeCount}</ListEntity>
        <ListEntity style={{ paddingLeft: "1rem" }}>
          回應 {content.commentCount}
        </ListEntity>
      </ModalFooter>
    </ModalInner>
  );
};

export default ModalContent;
