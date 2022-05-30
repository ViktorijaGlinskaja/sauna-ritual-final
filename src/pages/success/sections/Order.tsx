import React from 'react';
import { Container, SectionWrapper, Typography } from 'components';
import { useSelector } from 'react-redux';
import { selectPlan } from 'state/selectors';

export const Order: React.FC = () => {
    const plan = useSelector(selectPlan)
    return (
        <SectionWrapper backgroundColor='blue'>
            <Container>
                <Typography type='h5' textAlign='center'>
                    Thank you for your order!
                </Typography>
                <Typography textAlign='center' type='body18'>
                    You have purcased <strong>{plan.title}</strong> subscription box
                </Typography>
            </Container>
        </SectionWrapper>
    )
}
