export type responseModel<TData> = {
  status: number;
  data: TData;
  error: string;
};
