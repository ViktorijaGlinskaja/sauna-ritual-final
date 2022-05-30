import React from 'react'
import { Typography } from 'components';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface SingleOptionQuestionProps {
    text: string,
    onClick: React.MouseEventHandler,
}

export const SingleAnswerOption: React.FC<SingleOptionQuestionProps> = ({ text, onClick }) => (
    <StyledButton onClick={onClick}>
        <Typography>
            {text}
        </Typography>
    </StyledButton>
)

const StyledButton = styled.button`
  margin-top: 1rem;
  box-shadow: 1px 1px 5px 1px grey;
  border: 1px solid ${theme.colors.blue};
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: ${theme.colors.blue};
  cursor: pointer;
  &:hover {
      transition: transform 150ms;
      transform: scale(1.03);
      background-color: ${theme.colors.yellow}
  }
`