import React from 'react'
import styled from 'styled-components/macro'

interface ProgressBarProps {
    progress: number,
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
    <ProgressBarContainer>
        <DoneBar style={{ width: `${progress}%` }} />
    </ProgressBarContainer>
)

const ProgressBarContainer = styled.div`
	position: relative;
	margin: 15px 0;
    border-radius: 20px;
	height: 30px;
    background-color: #d8d8d8;
`
const DoneBar = styled.div`
	transition: 1s ease 0.3s;
	box-shadow: 0 3px 3px -5px #c0d1ef, 0 2px 5px #ffc8b7;
    border-radius: 20px;
    height: 100%;
    background: linear-gradient(to right, 
    #c0d1ef ,
    #ffeadf,
    #ffc8b7
  );
`