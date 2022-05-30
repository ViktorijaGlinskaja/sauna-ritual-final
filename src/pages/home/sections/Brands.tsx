import React from 'react'
import { Box, Container, FlexWrapper, Image, SectionWrapper, Typography } from 'components';
import { BRANDS } from 'constants/Brands';

export const Brands: React.FC = () => (
    <Box id="brands">
        <SectionWrapper>
            <Container>
                <Typography
                    type='h5'
                    marginBottom='s32'
                    textAlign='center'
                >
                    Amazing Products From Brands You Love
                </Typography>
                <Container>
                    <FlexWrapper
                        justifyContent='center'
                        flexWrap='wrap'
                    >
                        {BRANDS.map(({ id, img }) => (
                            <Box
                                key={id}
                                marginY='s16'
                                marginX='s24'
                            >
                                <Image
                                    src={img}
                                    alt={img}
                                    height='2.5rem'
                                />
                            </Box>
                        ))}
                    </FlexWrapper>
                </Container>
            </Container>
        </SectionWrapper>
    </Box>
);
