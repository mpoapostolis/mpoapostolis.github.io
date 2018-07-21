import { css } from "emotion";

// ***********************CONSTS***********************
const BOXSHADOW = "box-shadow: 0 0 1px 1px #0000002f";

// **********************CSS***************************
export const container = css`
  padding: 10px;
  display: grid;
  width: calc(100vw - 20px);
  height: calc(100vh - 20px);
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr) 1.25fr;
  grid-template-rows: 100px repeat(2, 1fr);
  grid-template-areas:
    "filters filters map"
    "cards cards map"
    "cards cards map";
`;

export const filters = css`
  grid-area: filters;
  ${BOXSHADOW};
`;

export const cards = css`
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
  flex-wrap: wrap;
  grid-area: cards;
  ${BOXSHADOW};
`;

export const map = css`
  grid-area: map;
  ${BOXSHADOW};
`;
