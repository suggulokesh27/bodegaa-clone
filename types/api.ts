export type ApiSuccess<T = any> = {
  success: true;
  data: T;
};

export type ApiError = {
  success: false;
  message: string;
  status?: number;
};

export type ApiResponse<T = any> = ApiSuccess<T> | ApiError;