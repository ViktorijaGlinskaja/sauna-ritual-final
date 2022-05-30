import React from 'react';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface Props {
    open: boolean,
    setOpen: (open: boolean) => void,
}

const Menu: React.FC<Props> = ({ open, setOpen }) => {
    return (
        <StyledMenu open={open} setOpen={setOpen}>
            <a href="#about" onClick={() => (setOpen(!open))}>About</a>
            <a href="#products" onClick={() => (setOpen(!open))}>Products</a>
            <a href="#brands" onClick={() => (setOpen(!open))}>Brands</a>
            <a href="#quiz" onClick={() => (setOpen(!open))}>Quiz</a>
            <a href="#sauna" onClick={() => (setOpen(!open))}>Sauna Benefits</a>
        </StyledMenu>
    );
};

export default Menu;

export const StyledMenu = styled.nav<Props>`
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    flex-flow: column wrap;
    display: flex;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    width: 100%;
    height: 100vh;
    padding-top: 3.5rem;
    background-color: ${theme.colors.blue};
    list-style: none;
      a {
    padding: 1.125rem 0.625rem;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 500;
    text-decoration: none;
    color: ${theme.colors.primary};
  }
`
