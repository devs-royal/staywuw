export const getCombinedActivitys = (dataResponse, dataItinerary) => {

  Object.entries(dataItinerary.items).forEach(([keyDataItinerary, itemItinerary]) => {
    if (itemItinerary.type === 'activity') {
      const resultadoFiltrado = dataResponse.data.filter(objeto => objeto.id === itemItinerary.key)[0];
      dataItinerary.items[keyDataItinerary].details = resultadoFiltrado.details;
      dataItinerary.items[keyDataItinerary].providerId = resultadoFiltrado.providerId;
    }

  });
  return dataItinerary.items;

}
