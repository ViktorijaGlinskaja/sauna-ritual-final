import styled from "styled-components/macro";
import { grid, GridProps } from "styled-system";
import { Theme } from "styles/theme";

import { Box } from "./Box";

export const GridWrapper = styled(Box) <GridProps<Theme>>`
  display: grid;
  && {
    ${grid};
  }
`;