import React from 'react';
import { FlexWrapper, GridWrapper, ProductCard, ProductContainer } from 'components'
import { PRODUCTS } from 'constants/Products';

export const ProductCardsGrid: React.FC = () => (
    <ProductContainer>
        <FlexWrapper justifyContent='center' alignItems='center'>
            <GridWrapper
                gridGap='1.5rem'
                gridTemplateColumns={{
                    desktop: 'repeat(3, 1fr)',
                    ltablet: 'repeat(2, 1fr)',
                    lmobile: 'repeat(1, 1fr)',
                }}
                marginTop='s48'
                >
                {PRODUCTS.map(({ id, img, title, size }) =>
                    <ProductCard
                        img={img}
                        key={id}
                        title={title}
                        size={size}
                    />
                )}
            </GridWrapper>
        </FlexWrapper>
    </ProductContainer>
)
