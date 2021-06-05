import Volume from '../../model/Volume';
export default interface BooksState {
    isLoading: boolean;
    isLoadingMore: boolean;
    error: string | null;
    books: Volume[];
    currentSearchPage: number;
    totalItemsAvailableForCurrSearch: number;
}