import React from 'react'
import { theme } from "styles/theme";
import styled from "styled-components/macro";
import { Banner, BlueButton, FlexWrapper, Image, Typography } from 'components';
import { Box } from 'components/wrappers/Box';
import Burger from './Burger';
import Menu from './Menu';
import { useQuery } from 'styles/breakpoints';
import { Link } from "gatsby"


export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const { isTablet } = useQuery();

  return (
    <StyledBox >
      <Banner>
        Now offering FREE worldwide shipping
      </Banner>
      <FlexWrapper
        justifyContent='space-between'
        alignItems='center'
        height='3.75rem'
        paddingY='s8'
        paddingX='s48'
        backgroundColor='white'
      >
        {isTablet ?
          <>
            <Box>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </Box>
            <Box>
              <Image
                src='logo'
                alt='logo'
                maxHeight='2.2rem'
              />
            </Box>
            <Box />
          </>
          :
          <>
            <FlexWrapper>
              <a href="#about">About</a>
              <a href="#products">Products</a>
              <a href="#brands" >Brands</a>
            </FlexWrapper>
            <Image
              src='logo'
              alt='logo'
              maxHeight='2.2rem'
            />
            <FlexWrapper alignItems='center'>
              <Link to="/checkout" style={{ textDecoration: 'none' }}>
                <BlueButton>
                  Get your box
                </BlueButton>
              </Link>
            </FlexWrapper>
          </>}
      </FlexWrapper>
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
    position: sticky;
    z-index: 2;
    top: 0;
    border-bottom: 1px solid ${theme.colors.blue};
    a {
    padding-left: 0.6rem;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    color: ${theme.colors.primary};
    &:active{
      color: ${theme.colors.red};
    }
  }
`;
