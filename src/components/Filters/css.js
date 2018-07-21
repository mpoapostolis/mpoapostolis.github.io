import { css } from "emotion";

export const container = css`
  display: flex;
  padding: 10px;
  height: 100%;
  flex-direction: column;
`;

export const filtersRow = css`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const label = css`
  display: flex;
  font-size: large;
  font-weight: 600;
`;

export const input = css`
  border: solid 1px black;
`;

export const inputCont = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const selectClass = css`
  width: 120px;
  background: white;
  border: solid 1px #0000003f;
`;
