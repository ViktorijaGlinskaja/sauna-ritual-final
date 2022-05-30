import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { Box } from "components";


export const ProductContainer = styled(Box)`
  position: relative;
  margin-top: 3rem;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  background-color: ${theme.colors.blue};
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    transform: rotate(45deg);
    margin-top: -30px;
    margin-right: auto;
    margin-left: auto;
    border-top: 30px solid ${theme.colors.blue};
    border-left: 40px solid ${theme.colors.blue};
    border-radius: 1rem;
    width: 50px;
    height: 60px;
    text-align: center;
  }  
`;
