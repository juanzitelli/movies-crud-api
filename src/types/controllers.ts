type KnownStatus = "ok" | "error";

type APIResponse = {
  status: KnownStatus;
  msg?: string;
};

type SingleItemAPIResponse<T> = APIResponse & {
  payload: {
    item: T;
  };
};

type ListAPIResponse<T> = APIResponse & {
  payload: {
    list: T[];
  };
};

export type ErrorResponse = APIResponse;
export type SuccessResponse<T> = SingleItemAPIResponse<T> | ListAPIResponse<T>;
