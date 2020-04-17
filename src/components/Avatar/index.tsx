/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import f from "../../assets/f.svg";
import m from "../../assets/m.svg";
import d from "../../assets/d.svg";

const AvatarLogo = (color: string) =>
  css({
    borderRadius: "50%",
    display: "inline-block",
    verticalAlign: "top",
    width: "40px",
    height: "40px",
    stroke: "none",
    background: color === "D" ? undefined : `var(--avatar-${color})`,
    color: "rgb(255, 255, 255)",
    fontSize: "25.6px",
    lineHeight: "40px",
    textAlign: "center",
  });

export default function Avatar({ dept, gender }: any) {
  return (
    <span css={AvatarLogo(gender)}>
      {dept ? (
        gender === "D" ? (
          <img src={d} alt="Dcard Staff" />
        ) : (
          dept[0].toUpperCase()
        )
      ) : gender === "M" ? (
        <img src={m} alt="male" />
      ) : (
        <img src={f} alt="female" />
      )}
    </span>
  );
}
