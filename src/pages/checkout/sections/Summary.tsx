import React, { useState } from 'react';
import { BlueButton, Box, Container, FlexWrapper, InputField, SectionWrapper, Typography } from 'components';
import { useSelector } from 'react-redux';
import { selectPlan } from 'state/selectors';
import { navigate } from 'gatsby';

export const Summary: React.FC = () => {
    const plan = useSelector(selectPlan)
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, firstName: event.target.value })
    }

    const handleLastNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, lastName: event.target.value })
    }

    const emailRegex = /\S+@\S+\.\S+/;

    const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, email: event.target.value })
        const email = event.target.value;
        if (emailRegex.test(email)) {
            setIsEmailValid(true);
            setMessage('Email is valid');
        } else {
            setIsEmailValid(false);
            setMessage('Please enter a valid email!');
        }
    }


    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (values.firstName && values.lastName && values.email && isEmailValid) {
            setValid(true);
            navigate('/success')
        }
        setSubmitted(true);
    }
 
    return (
        <SectionWrapper>
            <Container>
                <Typography type='h5' paddingBottom='s16' textAlign='center'>
                    Check Out to Get Your Box
                </Typography>
                <FlexWrapper justifyContent='center'>
                    <Box borderRadius='r16' padding='s32' backgroundColor='red'
                        width={{
                            _: '22rem',
                            stablet: '26rem'
                        }}>
                        <Box
                            marginBottom='s16'
                            borderBottom='0.5px solid'
                            borderColor='secondary' >
                            <Typography type='body18'> Order Summary</Typography>
                        </Box>
                        <FlexWrapper justifyContent='space-between'>
                            <Typography fontWeight='fw600'>
                                Plan: {plan.title}
                            </Typography>
                            <Typography fontWeight='fw600'>
                                ${plan.price}
                            </Typography>
                        </FlexWrapper>
                        <FlexWrapper justifyContent='space-between'>
                            <Typography> Shipping </Typography>
                            <Typography> FREE </Typography>
                        </FlexWrapper>
                        <Typography>1st Box -Summer Box</Typography>
                        <FlexWrapper justifyContent='space-between' marginY='s24'>
                            <Typography fontWeight='fw600'>
                                Total to pay
                            </Typography>
                            <Typography fontWeight='fw600'>
                                ${plan.pay}
                            </Typography>
                        </FlexWrapper>
                        <form onSubmit={handleSubmit}>
                            {submitted && valid
                                ? <Typography> Success! </Typography>
                                : null}
                            <InputField
                                onChange={handleFirstNameInputChange}
                                placeholder='First Name'
                                name='firstName'
                                value={values.firstName}
                            />
                            {submitted && !values.firstName
                                ? <Typography type='caption14'>
                                    Please enter your first name
                                </Typography>
                                : null}
                            <InputField
                                onChange={handleLastNameInputChange}
                                placeholder='Last Name'
                                name='lastName'
                                value={values.lastName}
                                error='Please enter your last name'
                            />
                            {submitted && !values.lastName
                                ? <Typography type='caption14'>
                                    Please enter your last name
                                </Typography>
                                : null}
                            <InputField
                                onChange={handleEmailInputChange}
                                placeholder='Email'
                                name='email'
                                value={values.email}
                                error='Please enter your email'
                            />
                            {submitted && !values.email
                                ? <Typography type='caption14'>
                                    Please enter your email
                                </Typography>
                                : null}
                            <Typography type='caption14'>
                                {message}
                            </Typography>
                            <FlexWrapper justifyContent='center' marginTop='s48'>
                                <BlueButton type='submit'>
                                    Go to payment
                                </BlueButton>
                            </FlexWrapper>
                        </form>
                    </Box>
                </FlexWrapper>
            </Container>
        </SectionWrapper>
    )
}

