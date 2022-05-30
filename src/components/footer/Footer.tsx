import React from 'react'
import { FlexWrapper, Image, Typography } from 'components';
import { LINKS } from 'constants/Links';

export const Footer: React.FC = () => (
    <FlexWrapper
        flexDirection={{
            _: 'column-reverse',
            stablet: 'row'
        }}
        justifyContent='space-between'
        alignItems='center'
        marginTop='s48'
        height='4.75rem'
        paddingY='s16'
        paddingX='s48'
        backgroundColor='blue'
    >
        <Typography type='caption14'>
            © 2022 SAUNA Ritual. All Rights Reserved.
        </Typography>
        <FlexWrapper>
            {LINKS.map(({ src, href }) =>
                <a href={href} key={href}>
                    <Image src={src} alt={src} margin='0rem 0.5rem' />
                </a>)
            }
        </FlexWrapper>
    </FlexWrapper>
);


