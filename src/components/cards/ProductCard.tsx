import React from 'react'
import styled from "styled-components/macro";
import { Image, Typography, FlexWrapper } from 'components';
import { Box } from "components/wrappers/Box";
import { mobile } from 'styles/breakpoints';

interface Styles {
    margin?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
    padding?: string;
    background?: string;
}

interface CardProps extends Styles {
    title?: string;
    alt?: string;
    size?: string;
    img: string;
}

export const ProductCard: React.FC<CardProps> = ({ title, img, alt, size, ...rest }) => (
    <StyledCard {...rest}>
        <FlexWrapper flexDirection='column'>
            <Box margin='auto'>
                <Image src={img} alt={img} height={'13rem'} />
            </Box>
            <Box>
                <Typography
                    type='body16'
                    marginTop='s48'
                >
                    {title}
                </Typography>
                <Typography type='caption14'>
                    {size}
                </Typography>
            </Box>
        </FlexWrapper>
    </StyledCard>
);

const StyledCard = styled.div<Styles>`
margin: auto;
border-radius: 1rem;
width: 22rem;
height: 26rem;
padding: 1.875rem 2.5rem;
background: white; 
  @media ${mobile} {
    margin: 4rem 0.5rem;
    maxWidth: 11rem;
  }
`