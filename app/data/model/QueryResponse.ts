export default interface QueryResponse<T> {
    kind: string;
    totlaItems: number;
    items: T[];
};