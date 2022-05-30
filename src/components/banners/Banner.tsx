import React, { ReactNode } from "react";
import { Typography } from "components";
import styled from "styled-components/macro";

export interface BannerProps {
  children: ReactNode;
}

export const Banner: React.FC<BannerProps> = ({ children }) => (
  <StyledBanner>
    <Typography color='primary'>{children}</Typography>
  </StyledBanner>
);

export const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background: linear-gradient(
    90deg,
    #c0d1ef 37.86%,
    #ffeadf 75.29%,
    #ffc8b7 100%
  );
`;
