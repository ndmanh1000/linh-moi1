export type PaginationRequest = {
  q?: string;
  includes?: string;
  filters?: string;
  orders?: string;
  columns?: string;
  page: number;
  pageSize: number;
};
