import styled from "styled-components/macro";
import { sTablet } from "styles/breakpoints";
import { Box } from "./Box";

export const ContentWrapper = styled(Box)`
  margin: 0 auto;
  max-width: 58rem;
  padding: 0 1rem;
  @media ${sTablet} {
    max-width: 100%;
  }
`;