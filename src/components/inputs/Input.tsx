import React from 'react';
import { Box, Styles } from 'components/wrappers/Box';
import { Theme } from '../../styles/theme';
import styled from 'styled-components/macro';
import { Typography } from 'components';

export type InputType = 'text' | 'email' | 'password' | 'date' | 'checkbox';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: InputType;
    placeholder?: string;
    error?: string;
    minValue?: number;
    maxValue?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type InputFieldProps = InputProps & Styles<Theme>;

export const InputField: React.FC<InputFieldProps> = ({ minValue, maxValue, label, type, onChange, error, placeholder, ...rest }) => (
    <>
        <label htmlFor="input">
            <Typography type="body16">{label}</Typography>
        </label>
        <StyledBox
            as="input"
            placeholder={placeholder}
            min={minValue}
            max={maxValue}
            type={type}
            onChange={onChange}
            {...rest}>
        </StyledBox>
    </>
);

const StyledBox = styled(Box) <Styles<Theme>>`
    margin-top: 0.5rem;
    border: 0rem;
    border-radius: 0.5rem;
    width: 100%;
    height: 2.5rem;
    padding-left: 1rem;
`;