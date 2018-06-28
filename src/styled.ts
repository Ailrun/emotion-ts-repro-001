import styled, { CreateStyled } from 'react-emotion';

export type Theme = {
  color: {
    primary: "#FAFAFA",
    positive: "green",
    negative: "blue",
  },
};
export const theme: Theme = {
  color: {
    primary: "#FAFAFA",
    positive: "green",
    negative: "blue",
  },
};

export default styled as CreateStyled<Theme>;
