import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Box, FlexWrapper, Typography } from 'components';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface QuestionProps {
    question: string;
    answer: string;
}

export const Question: React.FC<QuestionProps> = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <Box
            marginBottom='s16'
            border='2px solid'
            borderColor='blue'
            borderRadius='r16'
            paddingY='s16'
            paddingX='s24'
        >
            <FlexWrapper alignItems='center' justifyContent='space-between'>
                <Typography type='body18' cursor='pointer' onClick={() => setExpanded(!expanded)}>
                    {question}
                </Typography>
                <StyledButton onClick={() => setExpanded(!expanded)}>
                    {expanded
                        ? <MinusOutlined />
                        : <PlusOutlined />
                    }
                </StyledButton>
            </FlexWrapper>
            {expanded
                && <Typography
                    type='caption14'
                    marginTop='s12'
                    marginBottom='s8'>
                    {answer}
                </Typography>
            }
        </Box>
    )
}

const StyledButton = styled.button`
    align-items: center;
    justify-content: center;
    align-self: center;
    display: flex;
    margin-left: 1rem;
    border-color: transparent;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: ${theme.colors.accent};
    cursor: pointer;
    color: ${theme.colors.white};
  `
