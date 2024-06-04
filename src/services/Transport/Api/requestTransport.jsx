import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export async function autoCompleteSearch(autocomplete, lang) {
  try {
    const response = await axiosWithInterceptor.get(
      `${process.env.NEXT_PUBLIC_API_ROYAL}/${lang}/v1/transport/search/${autocomplete}`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

export async function getTransportation(destinationId, lang) {
  try {
    const response = await axiosWithInterceptor(
      `${process.env.NEXT_PUBLIC_API_ROYAL}/${lang}/v1/transport/list-zone/${destinationId}`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getListingTransports(lang, ids) {
  try {
    const response = await axiosWithInterceptor.get(
      `${process.env.NEXT_PUBLIC_API_ROYAL}/${lang}/v1/transports/destinations/${ids.destinationId}/zones/${ids.zoneFromId}/${ids.zoneToId}/vehicles`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const saveToCartTransport = async (requestData) => {
  try {
    const response = await axiosWithInterceptor.post(
      "/v1/carts/transport",
      requestData
    );
    return response.data;
  } catch (error) {
    console.error("error",error);
    throw error;
  }
};
