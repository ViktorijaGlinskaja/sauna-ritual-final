import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchQuestions } from './thunks';
import { Plan, ProductsState } from './types';


const initialState: ProductsState = {
    plan: {
        id: null as unknown as number,
        title: 'Annual',
        info: '',
        price: 49.99,
        pay: 199.99,
        total: '',
        frequency: '',
        value: '',
    },
    questions: [],
    status: 'idle',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setPlan: (state, action: PayloadAction<Plan>) => {
            state.plan = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.questions = action.payload
            state.status = 'success'
        }),
            builder.addCase(fetchQuestions.rejected, (state) => {
                state.status = 'error'
            }),
            builder.addCase(fetchQuestions.pending, (state) => {
                state.status = 'loading'
            })
    }
})

export const {
    setPlan
} = productSlice.actions

export default productSlice;