import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

export const fetchCartData = async (cartUid) => {
    try {
      if (cartUid === null) {
        return null;
      }
  
      const response = await axiosWithInterceptor.get(
        `v1/carts/${cartUid}?currency=MXN`
      );
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };