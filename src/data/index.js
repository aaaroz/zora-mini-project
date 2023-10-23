export const barChartData = [
  {
    name: "Total Sales",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "Net Profit",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
];

export const barChartOptions = {
  colors: ["#404040", "#0a0a0a"],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
    labels: {
      show: true,
      style: {
        colors: "#9aaeb5",
        fontSize: "14px",
      },
    },
  },
  fill: {
    opacity: 1,
    colors: ["#404040", "#0a0a0a"],
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: "roboto",
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: "roboto",
      },
    },
    theme: "dark",
  },
};

export const productSalesDognutChartData = [63, 25, 74, 53, 67, 56];

export const productSalesDognutChartOptions = {
  labels: [
    "Mobile Phone",
    "Furniture",
    "Clothing",
    "Watches",
    "Smart TVs",
    "Drinks",
  ],
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },

  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  colors: ["#a288ec", "#ffa071", "#fc424a", "#0b0f19", "#99d1a6", "#f88"],
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
};
