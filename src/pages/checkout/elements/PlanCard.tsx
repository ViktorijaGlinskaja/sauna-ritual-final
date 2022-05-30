import React from 'react'
import { CheckOutlined, CloseOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Box, FlexWrapper, Typography } from 'components'
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

export interface Plan {
    id?: number;
    title?: string;
    info?: string;
    price?: number;
    total?: string;
    frequency?: string;
    selected?: string;
    checked?: boolean;
    value?: string;
    onClick?: React.MouseEventHandler;
}

export const PlanCard: React.FC<Plan> = ({
    id,
    title,
    info,
    price,
    value,
    frequency,
    total,
    checked,
    onClick
}) => {
    return (
        <FlexWrapper
            alignItems='center'
            flexDirection='column'
            marginTop='s12'
            maxWidth='50%'
        >
            {checked &&
                <Box
                    borderTopRightRadius='r4'
                    borderTopLeftRadius='r4'
                    paddingX='s8'
                    backgroundColor='accent'
                >
                    <Typography color='white'>
                        Selected Plan
                    </Typography>
                </Box>}
            <StyledPlanCard onClick={onClick} checked={checked}>
                <Box borderBottom='0.5px solid' borderColor='secondary'>
                    <FlexWrapper>
                        <Typography type='h6' marginBottom='s16'>
                            {title}
                        </Typography>
                        {value === 'optionA' &&
                            <FlexWrapper
                                alignItems='center'
                                marginLeft='s16'
                                borderRadius='r16'
                                minWidth='6rem'
                                maxHeight='1.5rem'
                                padding='s12'
                                backgroundColor='accent'
                            >
                                <Typography type='caption14' color='white'>
                                    BEST Value
                                </Typography>
                            </FlexWrapper>
                        }
                    </FlexWrapper>
                    <Typography
                        color={
                            id === 1
                                ? 'accent'
                                : 'primary'
                        }>
                        {info}
                    </Typography>
                    <FlexWrapper alignItems='flex-end'>
                        <Typography
                            type='h6'
                            marginRight='s12'
                            fontWeight='fw600'
                        >
                            ${price}
                        </Typography>
                        <Typography type='body16'>
                            {total}
                        </Typography>
                    </FlexWrapper>
                    <Typography
                        type='caption14'
                        marginY='s16'
                        color='secondary'
                    >
                        {frequency}
                    </Typography>
                </Box>
                <FlexWrapper flexDirection='row' alignItems='center'>
                    <Typography type='caption14' marginTop='s16'>
                        <CheckOutlined />
                        Seasonal Box with up to 5 products
                    </Typography>
                    <StyledContainer>
                        <ExclamationCircleOutlined />
                    </StyledContainer >
                </FlexWrapper>
                < Typography
                    type='caption14'
                    marginY='s16'
                    textDecoration={
                        id === 1
                            ? 'none'
                            : 'line-through'} >
                    {id === 1
                        ? <CheckOutlined />
                        : <CloseOutlined />}
                    Earlier shipping
                </Typography>
                <Typography type='caption14' marginY='s16' >
                    <CheckOutlined />
                    Cancel anytime
                </Typography>
            </StyledPlanCard>
        </FlexWrapper >)
}


const StyledContainer = styled.div`
 position: relative;
 margin-left: 0.5rem;
 background-color: transparent;
 &:before {
    content: "4-5 full-size";
    position: absolute;
    top: -2rem;
    right: 0;
    opacity: 0;
    width: 5.5rem;
    padding: 0.3rem;
    background-color: ${theme.colors.accent};
}
&:hover:before {
    opacity: 1;
}`

const StyledPlanCard = styled(Box) <Plan>`
  margin-top: ${({ checked }) => checked ? ` 0rem` : `2rem`};
  border: ${({ checked }) => checked ? ` 0.5rem solid ${theme.colors.accent}` : `0.5rem solid ${theme.colors.blue}`};
  border-radius: 1rem;
  min-width: 17rem;
  width: auto;
  padding: 1.5rem;
  background-color: ${theme.colors.blue};
  cursor: pointer;
  `
