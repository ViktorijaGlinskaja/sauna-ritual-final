import React from 'react'
import { theme } from "styles/theme";
import styled from "styled-components/macro";
import { Banner, FlexWrapper, Image } from 'components';
import { Box } from 'components/wrappers/Box';
import { Link } from 'gatsby';

export const Navbar: React.FC = () => (
    <StyledBox >
        <Banner>
            Now offering FREE worldwide shipping
        </Banner>
        <FlexWrapper
            justifyContent='center'
            alignItems='center'
            height='3.75rem'
            paddingY='s8'
            paddingX='s48'
            backgroundColor='white'
        >
            <Link to="/home" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <Image
                    src='logo'
                    alt='logo'
                    maxHeight='2.2rem'
                />
            </Link>
        </FlexWrapper>
    </StyledBox>
);


const StyledBox = styled(Box)`
    position: sticky;
    z-index: 2;
    top: 0;
    border-bottom: 1px solid ${theme.colors.blue};
`;
