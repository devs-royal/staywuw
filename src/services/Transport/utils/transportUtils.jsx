export function filterBySelectedFilters(dataTransport, selectedFilters, pricing) {
    let filteredData = dataTransport;

    if (selectedFilters.category.includes(1)) {
        filteredData = filteredData.filter(item => item.type === 'private');
    } else if (selectedFilters.category.includes(2)) {
        filteredData = filteredData.filter(item => item.type === 'shared');
    }

    if (selectedFilters.baggage[0] !== -1) {
        if (selectedFilters.baggage[0] === 8) {
            filteredData = filteredData.filter(item => item.large_suitcase >= 8);
        } else {
            filteredData = filteredData.filter(item => item.large_suitcase === selectedFilters.baggage[0]);
        }
    }

    if (selectedFilters.seats[0] !== -1) {
        if (selectedFilters.seats[0] === 8) {
            filteredData = filteredData.filter(item => item.places >= 8);
        } else {
            filteredData = filteredData.filter(item => item.places === selectedFilters.seats[0]);
        }
    }

    if (pricing.min !== "" && pricing.max !== "") {
        filteredData = filteredData.filter(item => 
            parseFloat(item.price) >= parseFloat(pricing.min) && parseFloat(item.price) <= parseFloat(pricing.max)
        );
    }

    return filteredData;
}



export function filterByOrderHotel(dataTransport, orderHotel) {
    if (orderHotel === 1) {
        return dataTransport.sort((a, b) => b.price - a.price);
    } else if (orderHotel === 2) {
        return dataTransport.sort((a, b) => a.price - b.price);
    }
}
