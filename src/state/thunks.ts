import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const fetchQuestionsPrefix = 'questions/GET_QUESTIONS';

export const fetchQuestions = createAsyncThunk(
    fetchQuestionsPrefix,
    async () => {
        try {
            const { data }: AxiosResponse = await axios.get(
                "https://627fbba6be1ccb0a4664296c.mockapi.io/reviews/QuizQuestions"
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);