// export const filters = {
//   'activities': {
//     title: 'titleActivities',
//     items: [
//       {
//         label: "allActivities",
//         value: -1,
//         checked: true,
//       },
//       {
//         label: "familyChildren",
//         value: 1,
//         checked: false,
//       },
//       {
//         label: "adults",
//         value: 2,
//         checked: false,
//       },
//       {
//         label: "couples",
//         value: 3,
//         checked: false,
//       },
//       {
//         label: "family",
//         value: 4,
//         checked: false,
//       },
//     ],
//     length: 4,
//   },
//   'duration': {
//     title: "titleDuration",
//     items: [
//       {
//         label: "allDuration",
//         value: -1,
//         checked: true,
//       },
//       {
//         label: "multidia",
//         value: 1,
//         checked: false,
//       },
//       {
//         label: "fullDay",
//         value: 2,
//         checked: false,
//       },
//       {
//         label: "flexible",
//         value: 3,
//         checked: false,
//       },
//       {
//         label: "halfDayMorning",
//         value: 4,
//         checked: false,
//       },
//       {
//         label: "halfDayAfternoon",
//         value: 5,
//         checked: false,
//       },
//       {
//         label: "night",
//         value: 6,
//         checked: false,
//       },
//     ],
//     length: 4,
//   },
//   'category': {
//     title: "titleCategories",
//     items: [
//       {
//         label: "allCategories",
//         value: -1,
//         checked: true,
//       },
//       {
//         label: "cityTours",
//         value: 1,
//         checked: false,
//       },
//       {
//         label: "parks",
//         value: 2,
//         checked: false,
//       },
//       {
//         label: "ticketsPasses",
//         value: 3,
//         checked: false,
//       },
//       {
//         label: "culture",
//         value: 4,
//         checked: false,
//       },
//       {
//         label: "specialEvents",
//         value: 5,
//         checked: false,
//       },
//       {
//         label: "gastronomy",
//         value: 6,
//         checked: false,
//       },
//     ],
//     length: 4,
//   },
// };

export const filterStart = {
  stars: {
    title: "Star",
    items: [
      {
        label: "allStart",
        value: -1,
        checked: true,
      },
      {
        label: "fiveStart",
        value: 5,
        checked: false,
      },
      {
        label: "fourStart",
        value: 4,
        checked: false,
      },
      {
        label: "threeStart",
        value: 3,
        checked: false,
      },
      {
        label: "twoStart",
        value: 2,
        checked: false,
      },
      {
        label: "oneStart",
        value: 1,
        checked: false,
      }
    ],
    length: 4,
  }
}


export const getFilters = (data) => {
  let type = 'category';
  const filters = {
    category: {
      title: "titleCategories",
      items: [
        {
          label: "allCategories",
          value: -1,
          checked: true,
        }
      ],
      length: 4,
    }
  };

  if ( type === 'category') {
    data.types.forEach(item => {
      filters.category.items.push({
        label: item.description,
        value: item.id,
        checked: false
      });
    });
  }


  return filters;
}
