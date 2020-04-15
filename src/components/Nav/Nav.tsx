/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useHistory } from "react-router-dom";

import DcardLogo from "../../assets/logo.svg";
import { NavWrapper, NavInnerWrapper } from "./NavStyles";

export default function ({ toggleNav }: any) {
  const history = useHistory();
  return (
    <nav css={NavWrapper(toggleNav)}>
      <div css={NavInnerWrapper}>
        <div style={{ height: "100%" }}>
          <img
            src={DcardLogo}
            alt="Dcard"
            data-for={`tooltip-home`}
            data-tip={`回首頁`}
            onClick={() => history.push("/")}
          />
        </div>
      </div>
    </nav>
  );
}
