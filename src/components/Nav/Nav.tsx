/** @jsx jsx */
import React from "react";
import ReactTooltip from "react-tooltip";

import { jsx } from "@emotion/core";

import DcardLogo from "../../assets/logo.svg";
import { NavWrapper, NavInnerWrapper } from "./NavStyles";
import { UIContext } from "../../contexts/UIContext";

export default function () {
  const { state, dispatch } = React.useContext(UIContext);
  return (
    <nav css={NavWrapper(state.listScrolled || state.toggleModal)}>
      <div css={NavInnerWrapper}>
        <div style={{ height: "100%" }}>
          <img
            src={DcardLogo}
            alt="Dcard"
            data-for={`tooltip-home`}
            data-tip={`回首頁`}
            onClick={() => {
              dispatch({
                type: "SET_CURRENT_FORUM",
                payload: { attr: "forum", value: "" },
              });
            }}
          />
          <ReactTooltip id={`tooltip-home`} className="tooltip" />
        </div>
      </div>
    </nav>
  );
}
