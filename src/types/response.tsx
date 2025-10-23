export type ApiResponse<T> = {
  rowCount: number;
  pageSize: number;
  pageCount: number;
  currentPage: number;
  items: T[];
};

export type Location = {
  id: string;
  name: string;
};
