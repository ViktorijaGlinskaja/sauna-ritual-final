import styled from "styled-components/macro";
import { tablet } from "styles/breakpoints";
import { Theme } from "styles/theme";

import { Box } from "./Box";

export const ContentWrapper = styled(Box)`
  margin: 0 auto;
  max-width: 58rem;
  padding: 0 1rem;
  @media ${tablet} {
    max-width: 100%;
  }
`;