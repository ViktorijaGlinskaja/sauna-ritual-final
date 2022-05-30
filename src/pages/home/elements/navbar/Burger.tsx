import React from 'react'
import styled from 'styled-components/macro'

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface ButtonProps {
  open: boolean;
}

const Burger: React.FC<Props> = ({ setOpen, open }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger

export const StyledBurger = styled.button<ButtonProps>`
  position: fixed;
  z-index: 9;
  top: 3.125rem;
  left: 1.5rem;
  justify-content: space-around;
  flex-flow: column nowrap;
  display: flex;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  div {
    position: relative;
    transform-origin: 1.5px;
    transition: all 0.3s linear;
    border-radius: 10px;
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#030303' : '#030303'};
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => open ? 0 : 1};
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;