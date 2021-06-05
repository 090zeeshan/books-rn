import { Dispatch } from 'react';
import BooksAction from './BooksAction';
import BooksActionType from './BooksActionType';
import * as BooksApi from '../../api/BooksApi';

export const searchBooks = (query: string) => {

    return (dispatch: Dispatch<BooksAction>) => {
        dispatch({ type: BooksActionType.SEARCH_STARTED } as BooksAction);
        BooksApi.search(query)
            .then(result => {
                dispatch({
                    type: BooksActionType.SEARCHED_SUCCESSFULL,
                    payload: { result, currentPage: 1 }
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

export const loadMore = (query: string, currPage: number, maxAvailableResults: number) => {
    if ((currPage * 10) >= maxAvailableResults) {
        return;
    }

    return (dispatch: Dispatch<BooksAction>) => {
        dispatch({ type: BooksActionType.LOAD_MORE_STARTED } as BooksAction)
        BooksApi.search(query, currPage * 10)
            .then(result => {
                dispatch({
                    type: BooksActionType.SEARCHED_SUCCESSFULL,
                    payload: { result, currentPage: currPage + 1 }
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

export const toggleFavourite = (id: string) => {
    return {
        type: BooksActionType.TOGGLE_FAVOURITE,
        payload: id
    } as BooksAction
}

export const toggleTBR = (id: string) => {
    return {
        type: BooksActionType.TOGGLE_TBR,
        payload: id
    } as BooksAction
}