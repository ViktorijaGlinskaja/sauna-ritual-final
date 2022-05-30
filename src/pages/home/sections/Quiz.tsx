import React from 'react'
import { BlueButton, Container, FlexWrapper, GridWrapper, Image, SectionWrapper, Typography } from 'components';
import { SAUNAS } from 'constants/Saunas';
import { Link } from 'gatsby';


export const Quiz: React.FC = () => (
    <SectionWrapper backgroundColor='blue' id="quiz">
        <Container >
            <FlexWrapper flexDirection='column' alignItems='center'>
                <Typography type='h5'>
                    New to the SAUNA Rituals?
                </Typography>
                <Typography>
                    Take our quiz and find out which type of sauna suits you and your needs the most.
                </Typography>
                <GridWrapper
                    gridGap='1.5rem'
                    gridTemplateColumns={{
                        desktop: 'repeat(4, 1fr)',
                        _: 'repeat(2, 1fr)'
                    }}
                    marginY='s48'
                >
                    {
                        SAUNAS.map(({ img, id, title }) => (
                            <FlexWrapper key={id} flexDirection='column' alignItems='center'>
                                <Image
                                    src={img}
                                    alt={img}
                                    height='5.5rem'
                                    margin='0rem 2rem'
                                />
                                <FlexWrapper>
                                    <Typography>
                                        {title}
                                    </Typography>
                                </FlexWrapper>
                            </FlexWrapper>
                        ))}
                </GridWrapper>
                <Link to="/quiz" style={{ textDecoration: 'none' }}>
                    <BlueButton>
                        Take a quiz
                    </BlueButton>
                </Link>
            </FlexWrapper>
        </Container>
    </SectionWrapper>
);