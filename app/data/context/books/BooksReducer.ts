import QueryResponse from '../../model/QueryResponse';
import Volume from '../../model/Volume';
import BooksAction from './BooksAction';
import BooksActionType from './BooksActionType';
import BooksState from './BooksState';


export const initialState: BooksState = {
    isLoading: false,
    error: null,
    books: [],
};

const combineBooks = (stateBooks: Volume[], payloadBooks: Volume[]) => {
    const combinedBooks = [...stateBooks];
    const newBooks = payloadBooks.filter(vol => !stateBooks.some(item => item.id == vol.id))
    return [...stateBooks, ...newBooks];
};

export default (state = initialState, action: BooksAction) => {
    console.log("inside reducer", action);
    switch (action.type) {
        case BooksActionType.SEARCH_STARTED: {
            return {
                ...state,
                isLoading: true,
            } as BooksState;
        }
        case BooksActionType.SEARCHED_SUCCESSFULL: {
            const result = action.payload as QueryResponse<Volume>
            console.log("books count", result.items.length);
            return {
                ...state,
                isLoading: false,
                books: combineBooks(state.books, result.items),
                error: null
            } as BooksState
        }
        case BooksActionType.SEARCH_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            } as BooksState
        }
        case BooksActionType.RESET_ERROR: {
            return {
                ...state,
                error: null
            } as BooksState
        }
        default: {
            return state;
        }
    }
}
