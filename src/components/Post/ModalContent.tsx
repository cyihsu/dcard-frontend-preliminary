/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import close from "../../assets/close.svg";

import { Post } from "../../types/Post";
import {
  ModalInner,
  ModalHeader,
  ModalHeaderItem,
  ModalUserIdentity,
  ModalFooter,
  ModalContentWrap,
  ModalTitle,
  ModalTopics,
  ModalTopicsWrapper,
  ModalEntity,
} from "./ModalStyles";
import { ListEntity } from "../List/ListElementStyles";
import { dateStringToChinese } from "../../utils/dateString";
import { contentPreprocess } from "../../utils/contentPreprocess";
import Reactions from "../Reactions/Reactions";
import ListForumLabel from "../List/ListForumLabel";
import ModalContentMedia from "./ModalContentMedia";
import Avatar from "../Avatar";

const ModalContent: React.FC<{ content: Post; handleClick: any }> = ({
  content,
  handleClick,
}) => {
  // Avoid duplicated fetching
  return React.useMemo(
    () => (
      <ModalInner>
        <ModalHeader>
          <ModalHeaderItem>
            <Avatar
              dept={content.anonymousDepartment ? false : content.department[0]}
              gender={content.gender}
            />
            <ModalUserIdentity>
              <span style={{ fontSize: "16px" }}>
                {content.school ? content.school : "匿名"}
              </span>
              {content.department && (
                <span>
                  <a href={`https://www.dcard.tw/@${content.department}`}>
                    {content.department}
                  </a>
                </span>
              )}
            </ModalUserIdentity>
          </ModalHeaderItem>
          <ModalEntity style={{ height: "20px", width: "20px" }}>
            <img
              src={close}
              alt="close modal"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
          </ModalEntity>
        </ModalHeader>

        <ModalContentWrap>
          <ModalTitle>
            <h1>{content.title}</h1>
            <div style={{ padding: "10px 0px" }}>
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
          <div>
            {contentPreprocess(content.content).map((paragraph, index) => {
              if (paragraph.includes("http:") || paragraph.includes("https:")) {
                return (
                  <ModalContentMedia
                    key={`paragraph${content.id}-${index}`}
                    queryKey={paragraph}
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
                  <li key={`${content.id}-${topic}`}>
                    <a href={`https://www.dcard.tw/topics/${topic}`}>{topic}</a>
                  </li>
                ))}
              </ModalTopics>
            </ModalTopicsWrapper>
          )}
        </ModalContentWrap>
        <ModalFooter>
          <Reactions id={content.id} reactions={content.reactions} isModal />
          <ListEntity>{content.likeCount}</ListEntity>
          <ListEntity style={{ paddingLeft: "1rem" }}>
            回應 {content.commentCount}
          </ListEntity>
        </ModalFooter>
      </ModalInner>
    ),
    [content, handleClick]
  );
};

export default ModalContent;
