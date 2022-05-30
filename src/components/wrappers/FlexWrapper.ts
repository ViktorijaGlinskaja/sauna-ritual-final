import styled from "styled-components/macro";
import { flexbox, FlexboxProps } from "styled-system";
import { Theme } from "styles/theme";

import { Box } from "./Box";

export const FlexWrapper = styled(Box) <FlexboxProps<Theme>>`
  display: flex;
  && {
    ${flexbox};
  }
`;
