import { ApiResponse } from "@/types/api";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.bodegaa.in/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

const handleError = (error: any): ApiResponse => {
  if (error.response) {
    return {
      success: false,
      message:
        error.response.data?.message || "Something went wrong",
      status: error.response.status,
    };
  }

  return {
    success: false,
    message: "Network error",
  };
};

export const getRequest = async <T = any>(
  url: string,
  params?: any
): Promise<ApiResponse<T>> => {
  try {
    const res = await api.get(url, { params });
    return { success: true, data: res.data };
  } catch (error) {
    return handleError(error);
  }
};

export const postRequest = async <T = any>(
  url: string,
  data?: any
): Promise<ApiResponse<T>> => {
  try {
    const res = await api.post(url, data);
    return { success: true, data: res.data };
  } catch (error) {
    return handleError(error);
  }
};

export const deleteRequest = async <T = any>(
  url: string
): Promise<ApiResponse<T>> => {
  try {
    const res = await api.delete(url);
    return { success: true, data: res.data };
  } catch (error) {
    return handleError(error);
  }
};