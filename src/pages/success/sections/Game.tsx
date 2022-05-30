import React, { useState, useEffect } from 'react';
import { BlueButton, GridWrapper, Typography } from 'components';
import { Card, CARDS } from 'constants/GameCards';
import { SingleCard } from '../elements';
import { FlexWrapper } from '../../../components/wrappers/FlexWrapper';

export const Game: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([])
    const [turns, setTurns] = useState(0)
    const [startedGame, setStartedGame] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [choiceOne, setChoiceOne] = useState<Card | null>(null)
    const [choiceTwo, setChoiceTwo] = useState<Card | null>(null)


    const shuffleCards = () => {
        const shuffledCards = [...CARDS, ...CARDS]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
        setStartedGame(true)
    }

    const handleChoice = (card: Card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                updateTurnCount()
            } else {
                setTimeout(() => updateTurnCount(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    const updateTurnCount = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(totalTurns => totalTurns + 1)
        setDisabled(false)
    }

    return (
        <FlexWrapper
            flexDirection='column'
            alignItems='center'
            paddingBottom='s24'
        >
            <Typography>Can't wait to receive your order?</Typography>
            <Typography marginBottom='s16'>Kill your time by playing our memory game!</Typography>
            <BlueButton onClick={shuffleCards}>New Game</BlueButton>
            {startedGame
                ? <Typography marginTop='s48'><strong>Turns: </strong>{turns}</Typography>
                : null}

            <GridWrapper
                gridGap='1rem'
                gridTemplateColumns={{
                    desktop: 'repeat(4, 1fr)',
                    lmobile: 'repeat(3, 1fr)',
                }}                       
            >
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        disabled={disabled}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                    />
                ))}
            </GridWrapper>
        </FlexWrapper>
    )
}