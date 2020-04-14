/** @jsx jsx */
import React from "react";
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
            onClick={() => {
              dispatch({
                type: "SET_CURRENT_FORUM",
                payload: { attr: "forum", value: "" },
              });
            }}
          />
        </div>
      </div>
    </nav>
  );
}
