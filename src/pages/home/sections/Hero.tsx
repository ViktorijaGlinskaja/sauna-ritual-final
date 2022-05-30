import { FlexWrapper, Typography, Box, BlueButton } from 'components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'

export const Hero: React.FC = () => (
    <FlexWrapper
        flexDirection={{
            _: 'column',
            stablet: 'row'
        }}
        justifyContent='space-between'
        height='calc(100vh - 5.75rem)'
        backgroundColor='blue'
    >
        <FlexWrapper
            justifyContent='center'
            alignItems='center'
            width={{
                lmobile: '100%',
                stablet: '50%'
            }}
            padding={{
                _: 's16',
                lmobile: 's32'
            }}
        >
            <Box
                maxWidth={{
                    stablet: '23rem',
                    ltablet: '27rem',
                    smdesktop: '30.5rem',
                }}
            >
                <Typography type='h3' >
                    Introducing the first SAUNA themed mystery box
                </Typography>
                <Typography
                    marginTop='s16'
                    marginBottom='s16'
                >
                    Enjoy a monthly or quarterly subscription box containing 4-5 full-size products and accessories
                </Typography>
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <BlueButton>
                        Get your box
                    </BlueButton>
                </Link>
            </Box>
        </FlexWrapper>
        <FlexWrapper
            width={{
                lmobile: '100%',
                stablet: '50%'
            }}
            height={{
                _: '45%',
                lmobile: '55%',
                stablet: '100%'
            }}>
            <StaticImage
                src='../../../assets/images/sauna.jpg'
                alt='sauna'
                style={{ width: '100%' }} />
        </FlexWrapper>
    </FlexWrapper>
);
