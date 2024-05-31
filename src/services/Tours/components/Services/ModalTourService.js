import moment from "moment";
// import { useContext } from "react";

// import LanguageContext from "../../../language/LanguageContext";

// const getDayAndMonth = (date) => {
//   const fecha = new Date(date);
//   const days = ['Dom', 'Lun', 'Mar', 'M', 'Jue', 'Vie', 'Sáb'];
//   const months = ['Enero', 'Feb', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Sep', 'Octubre', 'Nov', 'Dic'];

// //   // Obtiene el número del día de la semana y del mes
//   const numDiaSemana = fecha.getDay();
//   const numMes = fecha.getMonth();


//   // Obtiene los nombres correspondientes del día de la semana y del mes
//   const nombreDiaSemana = days[numDiaSemana];
//   const nombreMes = months[numMes];

//   //obtener el dia en numero ejemplo 2024-03-05 = 5 de marzo solo obtendria el 5 sin el 0
//   const parts = date.split("-");
//   const day = parseInt(parts[2], 10);

//   return {
//     dayName: nombreDiaSemana,
//     month: nombreMes,
//     day

//   };
// }

//genera grupos de 6 items


const getGroupTime = (times) => {
  const groupedArray = times.reduce((accumulator, currentValue, index) => {
    const groupIndex = Math.floor(index / 6);

    if (!accumulator[groupIndex]) {
      accumulator[groupIndex] = [];
    }

    accumulator[groupIndex].push(currentValue);

    return accumulator;
  }, []);

  return groupedArray
}

export const getCombinedRate = (props) => {
  const { tourModal, tourInfo } = props;

  Object.entries(tourModal.schedule).forEach(([keySchudele, schedule]) => {
    // let dayAndMonth = getDayAndMonth(schedule.date);
    let times = getGroupTime(schedule.times)
    
    tourModal.schedule[keySchudele].code = tourInfo.code;
    tourModal.schedule[keySchudele].address = tourInfo.address;
    tourModal.schedule[keySchudele].cancelPolicies = tourInfo.cancelPolicies;
    tourModal.schedule[keySchudele].times = times;
    tourModal.schedule[keySchudele].dayName = moment(schedule.date).format("dddd");
    tourModal.schedule[keySchudele].month = moment(schedule.date).format("MMMM");
    tourModal.schedule[keySchudele].day = moment(schedule.date).format("D");
    Object.entries(schedule.rates).forEach(([keyRates, rate]) => {
      const resultadoFiltrado = tourInfo.rates.filter(objeto => objeto.id === rate.id);
      tourModal.schedule[keySchudele].rates[keyRates].nameTour = resultadoFiltrado[0].text;
      Object.entries(resultadoFiltrado[0].categories).forEach(([keyCategories, categorie]) => {
        const resultadoCategorie = rate.categories.filter(objeto => objeto.id === categorie.id);
        tourModal.schedule[keySchudele].rates[keyRates].categories[keyCategories] = {
          text: categorie.text,
          ...resultadoCategorie[0]
        };
      });
    });
  });

  return tourModal.schedule;
};
