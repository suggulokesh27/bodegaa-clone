import { deleteRequest, getRequest, postRequest } from "./api";
import { ENDPOINTS } from "./endpoints";

export const sendOtpService = async (mobile_number: string) => {
  return postRequest(ENDPOINTS.AUTH.SEND_OTP, {
    mobile_number,
  });
};

export const verifyOtpService = async (
  mobile_number: string,
  otp: string
) => {
  return postRequest(ENDPOINTS.AUTH.VERIFY_OTP, {
    mobile_number,
    otp,
  });
};

export const getCategoryService = async () => {
  return getRequest(ENDPOINTS.CATEGORY.GET);
};

export const getBestSellersService = async () => {
  return getRequest(ENDPOINTS.PRODUCTS.BEST_SELLERS);
};

export const addToFavouriteService = async (productId: string) => {
  return postRequest(ENDPOINTS.FAVOURITE.ADD, {
    productId,
  });
};

export const removeFavouriteService = async (productId: string) => {
  return deleteRequest(ENDPOINTS.FAVOURITE.REMOVE(productId));
};

export const addToCartService = async (
  productId: string,
  quantity: number
) => {
  return postRequest(ENDPOINTS.CART.ADD, {
    productId,
    quantity,
  });
};