import { configureStore } from '@reduxjs/toolkit';
import { AnyAction, combineReducers, CombinedState } from 'redux';
import { useDispatch } from 'react-redux';
import { productSlice } from './slice';
import { ProductsState } from './types';

interface RootState {
    product: ProductsState
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
    product: productSlice.reducer
})

export const rootReducer = (state: any, action: AnyAction) => combinedReducer(state, action)

export const store = configureStore({ reducer: rootReducer })

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()