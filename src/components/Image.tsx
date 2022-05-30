import React from "react";
import styled from 'styled-components/macro';
import LazyLoad from 'react-lazyload';
import { mobile } from "styles/breakpoints";
import { Visuals, visuals } from 'utils/visuals';

interface Styles {
    maxWidth?: string;
    width?: string;
    height?: string;
    margin?: string;
    maxHeight?: string;
    alt: string;
}

interface ImageProps extends Styles {
    src: Visuals;
    mobile_src?: Visuals;
    onClick?: () => void;
}

const Img = styled.img<Styles>`
    margin: ${({ margin }) => margin || ''};
    max-width: ${({ maxWidth }) => maxWidth || ''};
    width: ${({ width }) => width || ''};
    height: ${({ height }) => height || ''};
    max-height: ${({ maxHeight }) => maxHeight || ''};
`;

export const Image: React.FC<ImageProps> = ({ src, alt, mobile_src, onClick, ...rest }) => {
    return (
        <LazyLoad height={200}>
            <picture>
                {mobile_src && <source media={mobile} srcSet={visuals[mobile_src]} />}
                <Img src={visuals[src]} alt={alt} {...rest} />
            </picture>
        </LazyLoad>
    )
}