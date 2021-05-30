import React, { createContext, Dispatch } from 'react';
import useThunkReducer, { Thunk } from 'react-hook-thunk-reducer';
import booksReducer, { initialState } from './BooksReducer';
import BooksState from './BooksState';

const contextParams: [BooksState, any] = [initialState, null as any];
export const BooksContext = React.createContext(contextParams);

export const BooksContextProvider = (props: any) => {
    const [booksState, dispatch] = useThunkReducer(booksReducer, initialState);

    return (
        <BooksContext.Provider value={[booksState, dispatch]}>
            {props.children}
        </BooksContext.Provider>
    )
};