const getFilterCheckbox = (dataTour,filter) => {

  const newDataTours = { ...dataTour };
  if (filter.length === 1 && filter[0] === -1) {
    return dataTour;
  }

  let activities = newDataTours.activities.filter(obj => {
    // Verificar si el objeto tiene la propiedad typologies y es un array
    if (Array.isArray(obj.typologies)) {
        // Verificar si alguno de los IDs de typologies coincide con los del filtro
        return obj.typologies.some(typology => filter.includes(typology.id));
    } else {
        // Si no hay typologies o no es un array, descartar el objeto
        return false;
    }
  });

  newDataTours.activities = activities;
  return newDataTours;

}

const getFilterStars = (dataTour,filter) => {
  const newDataTours = { ...dataTour };

  if (filter.length === 1 && filter[0] === -1) {
    return dataTour;
  }

  const activities = newDataTours.activities.filter(objeto => filter.includes(objeto.star_rating));

  newDataTours.activities = activities;
  return newDataTours;

}

const getFilterPriceRange = (dataTour,filter) => {
  const newDataTours = { ...dataTour };
  const activities = newDataTours.activities.filter(objeto => objeto.price >= Math.min(...filter) && objeto.price <= Math.max(...filter));

  newDataTours.activities = activities;
  return newDataTours;
}


export const getFilterTours = (dataTour, filter) => {
  let newDataTours = { ...dataTour };

  for (let key in filter) {
    if (filter[key].length > 0) {
      const functionName = `getFilter${key.charAt(0).toUpperCase() + key.slice(1)}`;
      /* eslint no-eval: 0 */
      if (typeof eval(functionName) === "function") {
        /* eslint no-eval: 0 */
        newDataTours = eval(`${functionName}(newDataTours, filter[key])`);
      }
    }
  }

  return newDataTours;

}

export {
  getFilterCheckbox,
  getFilterStars,
  getFilterPriceRange
}
