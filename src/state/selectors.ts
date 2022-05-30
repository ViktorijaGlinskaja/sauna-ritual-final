import { AppState } from './types';


export const selectPlan = (state: AppState) => {
    return state.product.plan
}

export const selectQuestion = (state: AppState) => {
    return state.product.questions
}
