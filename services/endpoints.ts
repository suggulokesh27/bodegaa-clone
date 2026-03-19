// services/endpoints.ts

export const ENDPOINTS = {
  AUTH: {
    SEND_OTP: "auth/send-otp",
    VERIFY_OTP: "auth/verify-otp",
  },

  CATEGORY: {
    GET: "category",
  },

  PRODUCTS: {
    BEST_SELLERS: "products/bestsellers",
  },

  FAVOURITE: {
    ADD: "favourite/addtofavourite",
    REMOVE: (productId: string) => `favourite/remove/${productId}`,
  },

  CART: {
    ADD: "cart",
  },
};