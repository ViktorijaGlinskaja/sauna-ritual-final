import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import { FlexWrapper } from 'components';
import { BaseButton, DefaultButtonProps } from './elements/BaseButton';
import { theme } from 'styles/theme';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}


export const BlueButton: React.FC<ButtonProps> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>
    <FlexWrapper
      justifyContent='center'
      alignItems='center'
    >
      {children}
    </FlexWrapper>
  </StyledButton>
);

const StyledButton = styled(BaseButton) <DefaultButtonProps>`
  border: 1px solid ${theme.colors.accent};
  border-radius: 2rem;
  width: 10rem;
  padding: 0.5rem;
  background-color: ${theme.colors.accent};
  cursor: pointer;
  font-size: 1.125rem;
  text-align: center;
  color: ${theme.colors.white};
  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.primary};
    background: linear-gradient(
    90deg,
    #c0d1ef 37.86%,
    #ffeadf 75.29%,
    #ffc8b7 100%
  );
  color: ${theme.colors.primary};
  }
`