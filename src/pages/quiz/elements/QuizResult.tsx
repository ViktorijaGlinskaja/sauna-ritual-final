import { Box, BlueButton, FlexWrapper, Typography } from 'components'
import React from 'react'
import { Link } from 'gatsby';

interface QuizResultProps {
    result: String,
    info?: String,
    onClick: () => void,
}
export const QuizResult: React.FC<QuizResultProps> = ({ result, info, onClick }) => (
    <FlexWrapper
        flexDirection='column'
        alignItems='center'
    >
        <Typography type='body18' marginY='s16'>
            You prefer <strong>{result}</strong> sauna!
        </Typography>
        <Typography marginBottom='s24'> {info}</Typography>
        <FlexWrapper flexDirection={{
            _: 'column',
            stablet: 'row'
        }}>

            <Box
                marginRight={{ _: 's0', stablet: 's8' }}
                marginBottom={{ _: 's8', stablet: 's0' }}
            >
                <BlueButton onClick={onClick}>
                    Restart quiz
                </BlueButton>
            </Box>
            <Link to="/checkout" style={{ textDecoration: 'none' }}>
                <BlueButton>
                    Get a box
                </BlueButton>
            </Link>
        </FlexWrapper>
    </FlexWrapper>
)
