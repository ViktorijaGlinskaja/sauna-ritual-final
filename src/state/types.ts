import { Statuses } from 'typings/generalTypes';
import { rootReducer } from './store'

export interface Plan {
    id: number;
    title: string;
    info: string;
    price: number;
    pay: number;
    total: string;
    frequency: string;
    value: string;
}

export interface Options {
    id: number,
    answerText: string,
    type: string,
    score: number,
}

export interface Question {
    id: number,
    questionType: string,
    questionText: string,
    answerOptions: Options[],
}

export interface ProductsState {
    plan: Plan
    questions: Question[]
    status: Statuses
}

export type AppState = ReturnType<typeof rootReducer>