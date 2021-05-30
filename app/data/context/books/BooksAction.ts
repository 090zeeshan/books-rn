import BooksActionType from "./BooksActionType";
import Volume from '../../model/Volume';
import QueryResponse from "../../model/QueryResponse";

export default interface {
    type: BooksActionType;
    payload: QueryResponse<Volume> | string;
}