const pieXValue = ["Italy", "France", "Spain"];
const yValues1 = [55, 49, 44,55];
const barColors1 = [
  "#04D8FF",
  "#C64DFF",
  "#1CBE23",
  "#4D89FF"
];
const yValues2 = [55, 49, 44];
const barColors2 = [
  "#04D8FF",
  "#C64DFF",
  "#1CBE23",
];

new Chart("pieChart", {
  type: "doughnut",
  data: {
    datasets: [{
      backgroundColor: barColors1,
      borderWidth:"0px",
      data: yValues1
    },
    {
        backgroundColor: barColors2,
        borderWidth:"0px",
        data: yValues2,
      },]
  },
});