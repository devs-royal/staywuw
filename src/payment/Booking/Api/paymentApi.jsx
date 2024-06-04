import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export const sendPaymentRequest = (paymentData) => {
  return axiosWithInterceptor
    .post("v1/payment", paymentData)
    .then((response) => {
      console.log("Payment successful:", response);
      return response;
    })
    .catch((error) => {
      console.log("Payment error:", error);
      throw error;
    });
};
