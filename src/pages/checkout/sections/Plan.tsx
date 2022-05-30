import React, { useState } from 'react'
import { Container, FlexWrapper, SectionWrapper, Typography } from 'components';
import { PlanCard } from '../elements';
import { PLANS } from 'constants/Plans';
import { useAppDispatch } from 'state/store';
import { setPlan } from 'state/slice';

export const Plan: React.FC = () => {
    const [select, setSelect] = useState("optionA");
    const dispatch = useAppDispatch()

    return (
        <SectionWrapper>
            <Container>
                <Typography type='h5' textAlign='center'>
                    Choose a Plan
                </Typography>
                <Typography textAlign='center'>
                    See why over 1 million members love us! Select a plan and check out below.
                </Typography>
                <FlexWrapper
                    flexDirection={{
                        _: 'column',
                        stablet: 'row'
                    }}
                    alignItems='center'
                    justifyContent='space-evenly'>
                    {
                        PLANS.map(({ id, title, info, price, pay, value, frequency, total }) =>
                            <PlanCard
                                key={id}
                                id={id}
                                title={title}
                                info={info}
                                price={price}
                                value={value}
                                checked={select === value}
                                onClick={() => {
                                    setSelect(value)
                                    dispatch(setPlan({
                                        id,
                                        title,
                                        info,
                                        price,
                                        pay,
                                        value,
                                        frequency,
                                        total
                                    }))
                                }}
                                frequency={frequency}
                                total={total} />)
                    }
                </FlexWrapper>
            </Container>
        </SectionWrapper>
    );
}


