import React from 'react'
import { Container, FlexWrapper, Image, SectionWrapper, Typography } from 'components';
import { STEPS } from 'constants/Steps';

export const About: React.FC = () => (
    <SectionWrapper id="about">
        <Container>
            <Typography
                type='h5'
                marginBottom='s32'
                textAlign='center'
            >
                How it works
            </Typography>
            <FlexWrapper
                flexDirection={{
                    _: 'column',
                    ltablet: 'row',
                }}>
                {STEPS.map(({ title, src, text, id }) => (
                    <FlexWrapper
                        key={id}
                        flexDirection='column'
                        alignItems='center'
                        margin='auto'
                        width={{
                            ltablet: '100%',
                            stablet: '26rem',
                            lmobile: '18rem',
                        }}
                        paddingX='s16'
                    >
                        <Image
                            src={src}
                            alt={src}
                            height='5rem'
                        />
                        <FlexWrapper flexDirection='column' marginY='s16' textAlign='center' >
                            <Typography type='body18'>
                                {title}
                            </Typography>
                            <Typography>
                                {text}
                            </Typography>
                        </FlexWrapper>
                    </FlexWrapper>
                ))}
            </FlexWrapper>
        </Container>
    </SectionWrapper>
);
