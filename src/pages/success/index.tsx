import { Box } from 'components';
import React from 'react';
import { Order } from './sections';

const Success: React.FC = () => (
    <Box backgroundColor='blue' minHeight='100vh'>
        <Order />
    </Box>
);

export default Success;