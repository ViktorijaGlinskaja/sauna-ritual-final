import React from 'react'
import { FlexWrapper, Typography } from 'components';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface MultiplyOptionQuestionProps {
    text: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const MultiplyAnswerOption: React.FC<MultiplyOptionQuestionProps> = ({ text, onChange }) => (
    <StyledCheckboxContainer>
        <input type="checkbox" onChange={onChange} />
        <label>
            <Typography type="body16" paddingLeft='s16'>
                {text}
            </Typography>
        </label>
    </StyledCheckboxContainer>
)


const StyledCheckboxContainer = styled(FlexWrapper)`
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  box-shadow: 1px 1px 5px 1px grey;
  border: 1px solid ${theme.colors.blue};
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: ${theme.colors.blue};
  &:hover {
      transition: transform 150ms;
      transform: scale(1.03);
      background-color: ${theme.colors.yellow}
  }
`;