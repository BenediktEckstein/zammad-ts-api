type OrderBy = "asc" | "desc";
export type GenericParams = Record<string, unknown>;
export type OnBehalfParams = {
    from?: number | string | undefined;
};
export type PaginationParams = {
    page?: number | undefined;
    per_page?: number | undefined;
};
export type SortParams = {
    sort_by?: string | undefined;
    order_by?: OrderBy | undefined;
};
export type ExpandParams = {
    expand?: boolean | undefined;
};
export {};
//# sourceMappingURL=Parameter.d.ts.map