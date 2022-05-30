import styled from "styled-components/macro";
import { mobile, tablet } from "styles/breakpoints";
import { Colors } from "styles/theme";

interface SectionWrapperStyles {
  minHeight?: string;
  backgroundColor?: Colors;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
  position: relative;
  padding: 4rem;
  min-height: ${({ minHeight }) => minHeight || ""};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.colors[backgroundColor] : ""};
  @media ${tablet} {
    padding: 3rem;
  }
  @media ${mobile} {
    padding: 2rem;
  }
`;
