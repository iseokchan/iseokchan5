import request from "graphql-request";

export const fetcher = (query: string) => request("/api/graphql", query);
