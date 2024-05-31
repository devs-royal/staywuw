export function processItineraryData(dataItinerary) {
  // FILTERS HOTEL FROM RH
  const filteredDataRH = dataItinerary.filter(item => item.provider === 'rh');
  const processedDataRH = filteredDataRH.map((item) => {
    const { key: id, name, rooms } = item;
    const roomDetails = rooms.flatMap((roomGroup) =>
        roomGroup.occupancies.map((occupancy) => ({
          roomId: roomGroup.code,
          roomName: roomGroup.name,
          adults: occupancy.adults,
          children: occupancy.children,
          code: occupancy.code,
          name: roomGroup.name,
        }))
      );

    return { id, name, roomDetails };
  });



  return processedDataRH;
}


export function ProcessDataHB(dataItinerary){
  // FILTERS HOTEL FROM HB 
  const filteredDataHB = dataItinerary.filter(item => item.provider !== 'rh' && item.type !== "activity");
  const processedDataHB = filteredDataHB.map((item)=>{
    const {key: id, name} = item;
    return {id, name};
  })

  return processedDataHB;


}
