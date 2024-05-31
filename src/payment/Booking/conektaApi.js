import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

export const conektaSuccessResponseHandler = (token) => {
  axiosWithInterceptor
    .post("http://127.0.0.1:8000/api/es/v1/payment-conekta", {
      token: token.id,
      name: "Adrian",
      lastname: "Canul",
      email: "adrian@gmail.com",
      phone: "9999999999",
      currency: "MXN",
      cartId: "1edfff6c-60ea-641e-958f-f77c86757bf9",
    })
    .then((response) => {
      alert("Se guardó correctamente");
    })
    .catch((error) => {
      alert("Error en la petición");
      console.error(error);
    });
};

export const conektaErrorResponseHandler = (response) => {
  alert(response.message_to_purchaser);
};
