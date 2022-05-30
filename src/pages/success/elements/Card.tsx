import React from 'react';
import { Box, Image } from 'components';
import { Card } from 'constants/GameCards';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { sTablet } from 'styles/breakpoints';


interface Styles {
    flipped?: boolean,
}

interface CardProps extends Styles {
    card: Card,
    disabled: boolean,
    handleChoice: (card: Card) => void,
}

export const SingleCard: React.FC<CardProps> = ({ card, flipped, disabled, handleChoice }) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <Box position='relative'>
            <StyledCard>
                <StyledFrontCard src={card.src} alt={card.src} flipped={flipped} />
                <StyledBackCard src='card' alt='card' flipped={flipped} onClick={handleClick} />
            </StyledCard>
        </Box >
    )
}

const StyledFrontCard = styled(Image) <Styles>`
  position: absolute;
  object-fit: contain;
  transform: ${({ flipped }) => flipped ? `rotateY(0deg)` : `rotateY(90deg)`};
  transition: all ease-in 0.2s;
  transition-delay: ${({ flipped }) => flipped ? `0.2s` : `0s`};
  border: 1px solid ${theme.colors.white};
  border-radius: 0.5rem;
  width:100%; 
  height:100%;
  padding: 0.5rem;
  background-color: ${theme.colors.white};
  `

const StyledBackCard = styled(Image) <Styles>`
  transform: ${({ flipped }) => flipped ? `rotateY(90deg)` : ``};
  transition: all ease-in 0.2s;
  transition-delay: ${({ flipped }) => flipped ? `0s` : `0.2s`};
  border: 1px solid ${theme.colors.white};
  border-radius: 0.5rem;
  width:100%; 
  height:100%;
`

const StyledCard = styled(Box) <Styles>`
  width: 9rem;
  height: 12.5rem;
  cursor: pointer;
  @media ${sTablet} {
    width: 6rem;
    height: 8.3rem;
    }
  `
