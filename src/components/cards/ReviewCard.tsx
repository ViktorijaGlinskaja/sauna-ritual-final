import React from 'react'
import styled from "styled-components/macro";
import { Box, Typography } from 'components';
import { mobile, lMobile } from 'styles/breakpoints';
import { Colors } from 'styles/theme';
import { StarFilled } from '@ant-design/icons';

interface Styles {
    backgroundColor?: Colors;
}

interface CardProps extends Styles {
    review?: string;
    name?: string;
}

export const ReviewCard: React.FC<CardProps> = ({ name, review, ...rest }) => (
    <StyledCard {...rest}>
        <Box>
            <Box>
                {Array.from({ length: 5 }, (_, i) =>
                    <StarFilled
                        key={i}
                        style={{
                            margin: '0.2rem',
                            paddingBottom: '0.5rem'
                        }}
                    />)}
            </Box>
            <Typography
                type='body16'
            >
                "{review}"
            </Typography>
            <Typography
                type='caption14'
                marginTop='s12'
            >
                - {name}
            </Typography>
        </Box>
    </StyledCard >

);

const StyledCard = styled.div <Styles>`
align-items: center;
justify-content: center;
display: flex;
margin: 1rem auto 2.5rem;
border-radius: 1rem;
max-width: 43.75rem;
height: 15rem;
padding: 1rem 5rem;
background-color: ${({ backgroundColor, theme }) =>
        backgroundColor ? theme.colors[backgroundColor] : ""};
text-align: center;
@media ${lMobile} {
    padding: 3rem 1rem;
  }
  @media ${mobile} {
    padding: 2rem;
  }
`