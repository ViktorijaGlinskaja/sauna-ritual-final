import React from 'react'
import { Container, FlexWrapper, GridWrapper, Image, SectionWrapper, Typography } from 'components';
import { BENEFITS } from 'constants/Benefits';

export const Action: React.FC = () => (
    <SectionWrapper id="sauna">
        <Container>
            <Typography type='h5' marginBottom='s32' >
                Choose our subscription box and feel all the benefits of sauna
            </Typography>
            <GridWrapper
                gridGap='2.5rem'
                gridTemplateColumns={{
                    desktop: 'repeat(3, 1fr)',
                    ltablet: 'repeat(2, 1fr)',
                    lmobile: 'repeat(1, 1fr)',
                }}
                marginTop='s48'
            >
                {BENEFITS.map(({ title, src, text, id }) => (
                    <FlexWrapper key={id}>
                        <Image
                            src={src}
                            alt={src}
                            height='5rem'
                        />
                        <FlexWrapper flexDirection='column' marginLeft='s24'>
                            <Typography>
                                {title}
                            </Typography>
                            <Typography>
                                {text}
                            </Typography>
                        </FlexWrapper>
                    </FlexWrapper>
                ))}
            </GridWrapper>
        </Container>
    </SectionWrapper>
);
