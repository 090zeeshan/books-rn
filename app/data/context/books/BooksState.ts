import Volume from '../../model/Volume';
export default interface{
    isLoading: boolean;
    error: string | null;
    books: Volume[];
}