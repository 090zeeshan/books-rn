import BooksActionType from "./BooksActionType";
import Volume from '../../model/Volume';
import QueryResponse from "../../model/QueryResponse";

export type SearchResult = {result: QueryResponse<Volume>, currentPage: number}

export default interface BooksAction {
    type: BooksActionType;
    payload: SearchResult | string;
}