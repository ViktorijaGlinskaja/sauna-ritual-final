import React, { useState, useEffect } from 'react';
import { Box, BlueButton, ContentWrapper, FlexWrapper, SectionWrapper, Typography, Navbar } from 'components';
import { SingleAnswerOption, MultiplyAnswerOption, QuizResult, ProgressBar } from './elements';
import { Result, RESULTS } from 'constants/QuizResults';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'state/store';
import { selectQuestion } from 'state/selectors';
import { fetchQuestions } from 'state/thunks';

const QuizPage: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswersCount, setSelectedAnswersCount] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [totalScore, setTotalScore] = useState(0);
    const [result, setResult] = useState('');
    const [multiplyOptionScore, setMultiplyOptionScore] = useState(0);
    const [progress, setProgress] = useState(0);
    const [resultSauna, setResultSauna] = useState<Result | undefined>({
        id: null as unknown as number, title: '', info: ''
    })
    const dispatch = useAppDispatch()
    const questions = useSelector(selectQuestion)

    const handleMultipleOptionChange = (checked: boolean, score: number) => {
        const newScore = checked ? totalScore + score : totalScore - score;
        const count = checked ? selectedAnswersCount + 1 : selectedAnswersCount - 1;
        setTotalScore(newScore);
        setSelectedAnswersCount(count);
    }

    const handleAnswerOptionClick = (score: number) => {
        let currentScore = totalScore + score
        setTotalScore(currentScore);
        const nextQuestion = currentQuestion + 1;
        let currentProgress = nextQuestion / questions.length * 100
        setProgress(currentProgress)
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setTimeout(() => {
                setShowScore(true);
                quizResult(currentScore)
            }, 1500)

        }
    }

    const handleMultiplyOptionClick = () => {
        handleAnswerOptionClick(multiplyOptionScore)
        setMultiplyOptionScore(0)
        setSelectedAnswersCount(0)
    }

    const quizResult = (score: number) => {
        if (score <= 7) {
            setResult('Traditional')
        } else if (score > 7 && score <= 12) {
            setResult('Dry')
        } else if (score > 12 && score < 17) {
            setResult('Steam')
        } else {
            setResult('Infrared')
        }
    }

    const restartQuiz = () => {
        setTotalScore(0);
        setCurrentQuestion(0);
        setProgress(0);
        setShowScore(false);
    };

    useEffect(() => {
        const sauna = RESULTS.find(sauna => sauna.title === result)
        setResultSauna(sauna)
    }, [result])


    useEffect(() => {
        dispatch(fetchQuestions())
    }, [])


    return (
        <>
            <Navbar />
            <SectionWrapper>
                <ContentWrapper>
                    <Box
                        boxShadow='2px 2px 10px 2px grey'
                        border='1px solid'
                        borderColor='blue'
                        borderRadius='r16'
                        maxWidth='60rem'
                        padding='s24'
                    >
                        {showScore
                            ? <QuizResult
                                result={result}
                                info={resultSauna?.info}
                                onClick={() => restartQuiz()}
                            />
                            : (
                                <>
                                    <Typography type='body16'>
                                        Question {currentQuestion + 1}/{questions.length}
                                    </Typography>
                                    <ProgressBar progress={progress} />
                                    <Typography type='body18'>
                                        {questions[currentQuestion]?.questionText}
                                    </Typography>
                                    {questions[currentQuestion]?.questionType === "multiply"
                                        ? <Typography>Choose as many as you want</Typography>
                                        : null}
                                    <FlexWrapper flexDirection='column' marginY='s32'>
                                        {questions[currentQuestion]?.answerOptions.map((answerOption) => (
                                            questions[currentQuestion].questionType === "multiply"
                                                ? <MultiplyAnswerOption
                                                    key={answerOption.answerText}
                                                    text={answerOption.answerText}
                                                    onChange={(e) => handleMultipleOptionChange(e.target.checked, answerOption.score)}
                                                />
                                                : <SingleAnswerOption
                                                    key={answerOption.answerText}
                                                    text={answerOption.answerText}
                                                    onClick={() => handleAnswerOptionClick(answerOption.score)}
                                                />
                                        ))}
                                        {questions[currentQuestion]?.questionType === "multiply" && selectedAnswersCount > 0
                                            ? <Box marginTop='s24' marginX='auto'>
                                                <BlueButton onClick={() => handleMultiplyOptionClick()}>
                                                    Next Question
                                                </BlueButton>
                                            </Box>
                                            : null}
                                    </FlexWrapper>
                                </>
                            )}
                    </Box>
                </ContentWrapper>
            </SectionWrapper>
        </>
    );
}

export default QuizPage;
