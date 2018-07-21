import { css } from "emotion";

export const container = css`
  width: 100%;
  height: 100%;
`;

export const point = css`
  position: relative;
  display: flex;
  width: 70px;
  height: 20px;
  padding:5px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
  background-color: #fff;
  border: 2px solid #666;
  border-radius: 30px;
  transition: 0.125s;
  &:hover {
    transform: scale(1.3);
  }
`;
