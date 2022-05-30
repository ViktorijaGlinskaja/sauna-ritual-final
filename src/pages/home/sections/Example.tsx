import React from "react";
import {  Typography, Box } from "components";
import { ProductCardsGrid, ProductCardsSlider } from "../elements";
import { useQuery } from "styles/breakpoints";

export const ExampleBox: React.FC = () => {
    const { isTablet } = useQuery();
    return (
        <Box marginBottom='s64' id="products">
            <Typography
                type='h5'
                paddingTop='s64'
                textAlign='center'
            >
                What's in the Box?
            </Typography>
            <Typography
                type='body18'
                textAlign='center'
            >
                Check our last box filling
            </Typography>
            {
                isTablet
                    ? <ProductCardsSlider />
                    : <ProductCardsGrid />
            }
        </Box>
    );
}
