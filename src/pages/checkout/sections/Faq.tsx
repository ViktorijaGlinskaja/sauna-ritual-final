import React, { useState, useEffect } from 'react'
import { AnimatedBanner, Container, FlexWrapper, Typography, SectionWrapper } from 'components'
import API, { Faq } from '../../../services/FaqService'
import { Question } from '../elements'

export const FAQ: React.FC = () => {
    const [faq, setFaq] = useState<Faq[]>([])

    useEffect(() => {
        (async () => {
            const data = await API.getFaq();
            setFaq(data);
        })();
    }, []);

    return (
        <>
            <SectionWrapper >
                <Container >
                    <Typography
                        type='h5'
                        paddingBottom='s48'
                        textAlign='center'
                    >
                        Frequently asked questions
                    </Typography>
                    {faq.map((question) => (
                        <Question key={question.id} {...question} />
                    ))}
                </Container>
            </SectionWrapper>
            <AnimatedBanner>
                <FlexWrapper>
                    <Typography marginX='s32'>
                        30 days free and easy returns - Try risk free - Free Express Worldwide shipping - Fast next-day refunds
                    </Typography>
                </FlexWrapper>
            </AnimatedBanner>
        </>
    )
}

