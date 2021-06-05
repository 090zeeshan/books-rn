import QueryResponse from '../../model/QueryResponse';
import Volume from '../../model/Volume';
import BooksAction, { SearchResult } from './BooksAction';
import BooksActionType from './BooksActionType';
import BooksState from './BooksState';


export const initialState: BooksState = {
    isLoading: false,
    isLoadingMore: false,
    error: null,
    books: [],
    currentSearchPage: 0,
    totalItemsAvailableForCurrSearch: 10,
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
                isLoadingMore: false,
            } as BooksState;
        }
        case BooksActionType.SEARCHED_SUCCESSFULL: {
            const { result, currentPage } = action.payload as SearchResult
            console.log("books count", result.items.length);
            return {
                ...state,
                isLoading: false,
                isLoadingMore: false,
                books: combineBooks(state.books, result.items),
                currentSearchPage: currentPage,
                totalItemsAvailableForCurrSearch: result.totlaItems,
                error: null
            } as BooksState
        }
        case BooksActionType.SEARCH_FAILED: {
            return {
                ...state,
                isLoading: false,
                isLoadingMore: false,
                error: action.payload
            } as BooksState
        }
        case BooksActionType.LOAD_MORE_STARTED: {
            return {
                ...state,
                isLoading: false,
                isLoadingMore: true,
            } as BooksState
        }
        case BooksActionType.RESET_ERROR: {
            return {
                ...state,
                error: null
            } as BooksState
        }
        case BooksActionType.TOGGLE_FAVOURITE: {
            const book = state.books.find(item => item.id == action.payload as string);
            if (book) {
                book.isFavourite = !!!book.isFavourite;
            }
            return {
                ...state,
                books: [...state.books],
            } as BooksState;
        }
        case BooksActionType.TOGGLE_TBR: {
            const book = state.books.find(item => item.id == action.payload as string);
            if (book) {
                book.isTBR = !!!book.isTBR;
            }
            return {
                ...state,
                books: [...state.books],
            } as BooksState;
        }
        default: {
            return state;
        }
    }
}
