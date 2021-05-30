import { Dispatch } from 'react';
import BooksAction from './BooksAction';
import BooksActionType from './BooksActionType';
import * as BooksApi from '../../api/BooksApi';

export const searchBooks = (query: string, currCount: number = 0, maxCount: number = 10) => {

    return (dispatch: Dispatch<BooksAction>) => {
        dispatch({ type: BooksActionType.SEARCH_STARTED } as BooksAction);
        BooksApi.search(query)
            .then(result => {
                dispatch({
                    type: BooksActionType.SEARCHED_SUCCESSFULL,
                    payload: result
                } as BooksAction);
            })
            .catch(error => {
                dispatch({
                    type: BooksActionType.SEARCH_FAILED,
                    payload: error.message
                } as BooksAction);
            })
    }
}

export const resetError = () => {
    return {
        type: BooksActionType.RESET_ERROR
    } as BooksAction
}