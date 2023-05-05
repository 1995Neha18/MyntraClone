import React from 'react'
import Chart from "@mindinventory/result-doughnut-chart";

export 

function Dashboard() {
  const apiData = {
    firstChartDataSetLabel: "%",
    secondChartDataSetLabel: "%",
    firstChart: [
      {
        name: "Order",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        data: 30,
        secondChartData: [5, 15, 10],
        secondChartCenterText: "30%",
      },
      {
        name: "First class",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        data: 15,
        secondChartData: [10, 2, 3],
        secondChartCenterText: "15%",
      },
      {
        name: "Second class",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        data: 35,
        secondChartData: [7, 18, 10],
        secondChartCenterText: "35%",
      },
      {
        name: "Fail",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        data: 20,
        secondChartData: [2, 8, 10],
        secondChartCenterText: "20%",
      },
    ],
    secondChart: [
      {
        name: "Tshirt",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        name: "Pants",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
      {
        name: "Sweat Wear",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
    firstChartTipTitle: "Selected Grade:",
    secondChartTipTitle: "Result summary:",
    tipData: [
      {
        firstChartTip: "Distinction grade",
        secondChartTip: "30% students pass with distinction grade.",
      },
      {
        firstChartTip: "First grade",
        secondChartTip: "15% students pass with first grade.",
      },
      {
        firstChartTip: "Second grade",
        secondChartTip: "35% students pass with second grade.",
      },
      {
        firstChartTip: "Fail",
        secondChartTip: "20% students fail.",
      },
    ],
    labelExtraData: "Result",
    extraData: [
      {
        grade: "Distinction",
        summary: "30% students pass with distinction grade in 2022.",
        date: "January 12, 2022", //also able to append key & value
      },
      {
        grade: "First",
        summary: "15% students pass with first grade in 2022.",
        date: "January 27, 2022",
      },
      {
        grade: "Second",
        summary: "35% students pass with second grade in 2022.",
        date: "January 19,2022 ",
      },
      {
        grade: "Fail",
        summary: "20% students fail in 2022.",
        date: "January 8,2022  ",
      },
    ],
  };
  return (
   <div><Chart data={apiData}/></div> 
  )
}

export default Dashboard