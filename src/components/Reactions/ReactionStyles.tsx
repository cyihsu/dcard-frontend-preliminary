import styled from "@emotion/styled";

export const ReactionWrap = styled.span`
  display: block;
  height: 20px;
  width: 20px;
  margin-left: -4px;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  :hover {
    transform: scale(1.3);
  }
  transition: 300ms all;
`;

export const ReactionListWrap = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
  align-items: center;
`;

export const ReactionsElement = styled.img`
  width: 100%;
  height: 100%;
`;
