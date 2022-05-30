import { Box } from 'components';
import React from 'react';
import { Game, Order } from './sections';

const Success: React.FC = () => (
    <Box backgroundColor='blue' minHeight='100vh'>
        <Order />
        <Game />
    </Box>
);

export default Success;