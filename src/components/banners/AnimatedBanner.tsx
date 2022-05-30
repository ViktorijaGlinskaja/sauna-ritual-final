import React, { ReactNode } from "react";
import styled from "styled-components/macro";

interface BannerProps {
    children: ReactNode;
}

export const AnimatedBanner: React.FC<BannerProps> = ({ children }) => (
    <StyledBanner>
        <StyledAnimation>
            {children}
        </StyledAnimation>
    </StyledBanner>
);


const StyledBanner = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background: linear-gradient(
    90deg,
    #c0d1ef 37.86%,
    #ffeadf 75.29%,
    #ffc8b7 100%
  );
    transition: all 6s ease;
`;

export const StyledAnimation = styled.div`
    white-space: nowrap;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    animation: slideshow 20s linear infinite;
@keyframes slideshow {
  0%    { left: 100%; }
  100%  { left: -100%; }
}
`;