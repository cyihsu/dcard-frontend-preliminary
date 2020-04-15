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
} from "./ModalStyles";
import { ListEntity } from "../List/ListElementStyles";
import { dateStringToChinese } from "../../utils/dateString";

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
        <ListEntity>
          {content && dateStringToChinese(content.createdAt)}
        </ListEntity>
      </ModalHeader>

      <div
        style={{ overflow: "auto", paddingLeft: "60px", paddingRight: "60px" }}
      >
        <h1 style={{ padding: "22px 0px" }}>{content.title}</h1>
        <span style={{ fontSize: "18px" }}>{content.content}</span>
      </div>
    </ModalInner>
  );
};

export default ModalContent;
