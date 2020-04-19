/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useHistory } from "react-router-dom";

import DcardLogo from "../../assets/logo.svg";
import svgDark from "../../assets/adjust-dark.svg";

import { NavWrapper, NavInnerWrapper } from "./NavStyles";

export default function ({ toggleNav, toggleDark }: any) {
  const history = useHistory();

  return (
    <nav css={NavWrapper(toggleNav)}>
      <div css={NavInnerWrapper}>
        <div style={{ height: "100%" }}>
          <img
            src={DcardLogo}
            style={{ height: "64px" }}
            alt="Dcard"
            data-for={`tooltip-home`}
            data-tip={`回首頁`}
            onClick={() => history.push("/")}
          />
        </div>
        <div style={{ height: "100%" }}>
          <img
            src={svgDark}
            style={{ height: "64px" }}
            alt="Toggle Dark mode"
            onClick={toggleDark}
          />
        </div>
      </div>
    </nav>
  );
}
