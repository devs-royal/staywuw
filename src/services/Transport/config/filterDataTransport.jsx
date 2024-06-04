export const filterDataTransport = [
  {
    name: "category",
    options: [
      { label: "all", value: -1, checked: true },
      { label: "private", value: 1, checked: false },
      { label: "shared", value: 2, checked: false },
    ],
  },
  {
    name: "baggage",
    options: [
      { label: "Todos", value: -1, checked: true },
      { label: "1", value: 1, checked: false },
      { label: "2", value: 2, checked: false },
      { label: "3", value: 3, checked: false },
      { label: "4", value: 4, checked: false },
      { label: "5", value: 5, checked: false },
      { label: "6", value: 6, checked: false },
      { label: "7", value: 7, checked: false },
      { label: "+ 8" , value: 8, checked: false },
    ],
  },
  {
    name: "seats",
    options: [
      { label: "Todos", value: -1, checked: true },
      { label: "1", value: 1, checked: false },
      { label: "2", value: 2, checked: false },
      { label: "3", value: 3, checked: false },
      { label: "4", value: 4, checked: false },
      { label: "5", value: 5, checked: false },
      { label: "6", value: 6, checked: false },
      { label: "7", value: 7, checked: false },
      { label: "+ 8", value: 8, checked: false },
    ],
  },
];

export const orderingTransport = {
  selected: "",
  items: [
    {
      value: 1,
      label: "PriceHigh",
    },
    {
      value: 2,
      label: "PriceLowest",
    },
  ],
};
