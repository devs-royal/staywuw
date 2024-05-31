export const filters = {
  stars: {
    title: "Star",
    items: [
      {
        label: "allStart",
        value: -1,
        checked: true,
      },
      {
        label: "oneStart",
        value: 1,
        checked: false,
      },
      {
        label: "twoStart",
        value: 2,
        checked: false,
      },
      {
        label: "threeStart",
        value: 3,
        checked: false,
      },
      {
        label: "fourStart",
        value: 4,
        checked: false,
      },
      {
        label: "fiveStart",
        value: 5,
        checked: false,
      },
    ],
    length: 4,
  },
  "hotel-type": {
    title: "titleTypeHotel",
    items: [
      {
        label: "allTypeHotel",
        value: -1,
        checked: true,
      },
      {
        label: "beach",
        value: 1,
        checked: false,
      },
      {
        label: "family",
        value: 2,
        checked: false,
      },
      {
        label: "romantic",
        value: 3,
        checked: false,
      },
      {
        label: "business",
        value: 4,
        checked: false,
      },
      {
        label: "onlyAdults",
        value: 5,
        checked: false,
      },
      {
        label: "petFriendly",
        value: 6,
        checked: false,
      },
    ],
    length: 4,
  },
  "eating-plan": {
    title: "titleFood",
    items: [
      {
        label: "allEatingPlan",
        value: -1,
        checked: true,
      },
      {
        label: "allInclusive",
        value: 1,
        checked: false,
      },
      {
        label: "onlyRooms",
        value: 2,
        checked: false,
      },
      {
        label: "continentalBreakFast",
        value: 3,
        checked: false,
      },
      {
        label: "specialBreakfast",
        value: 4,
        checked: false,
      },
      {
        label: "lunchIncluded",
        value: 5,
        checked: false,
      },
      {
        label: "dinnerIncluded",
        value: 6,
        checked: false,
      },
    ],
    length: 4,
  },
};

export const ordering = {
  selected: "",
  items: [
    {
      value: 1,
      label: "Featured",
    },
    {
      value: 2,
      label: "Offers",
    },
    {
      value: 3,
      label: "PriceHigh",
    },
    {
      value: 4,
      label: "PriceLowest",
    },
    ...(process.env.REACT_APP_DEV === "true"
      ? [
          {
            value: 5,
            label: "RateHW",
          },
          {
            value: 6,
            label: "RateHB",
          },
        ]
      : []),
  ],
};
