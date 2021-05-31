import Volume from '../../model/Volume';
export default interface BooksState {
    isLoading: boolean;
    error: string | null;
    books: Volume[];
}