import React, { useEffect, useState } from 'react'
import Chart from "@mindinventory/result-doughnut-chart";

export 

function Dashboard() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDU1MDQ1NThjZGYwYWMzOTZmYTRhMDciLCJpYXQiOjE2ODMzODIyMTZ9.4EVYyMZ6R3_M99Te9FWmdeAMbtszSm7AtgnZbRLEjLI"
  const [data,setdata] = useState("")

  useEffect(()=>{
    fetch(`https://urban-backend.onrender.com/products`,{
       method : "GET",
       headers : {
          "Content-type" : "application/json",
          "Authorization" : `Bearer ${token}`
       }
    }).then((res)=>{
       return res.json()
    }).then((res)=>{
       setdata(res)
    }).catch((err)=>{
       console.log(err)
    })
  },[])
  const apiData = {
    firstChartDataSetLabel: "%",
    secondChartDataSetLabel: "%",
    firstChart: [
      {
        name: "Total Products",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        data: data.length,
        secondChartData: [5, 15, 10],
        secondChartCenterText: "30%",
      },
      {
        name: "Cart",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        data: 15,
        secondChartData: [10, 2, 3],
        secondChartCenterText: "15%",
      },
      {
        name: "Cancelled Item",
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
    firstChartTipTitle: "Order Summary:",
    secondChartTipTitle: "Result:",
    tipData: [
      {
        firstChartTip: "Distinction grade",
        secondChartTip: "30% Products are ordered",
      },
      {
        firstChartTip: "First grade",
        secondChartTip: "15% order is cancelled ",
      },
      {
        firstChartTip: "Second grade",
        secondChartTip: "35% order failed",
      },
      {
        firstChartTip: "Fail",
        secondChartTip: "20% cart products",
      },
    ],
    labelExtraData: "Result",
    extraData: [
      {
        grade: "Distinction",
        summary: "30% ",
        date: Date(), //also able to append key & value
      },
      {
        grade: "First",
        summary: "15% ",
        date: Date(),
      },
      {
        grade: "Second",
        summary: "35% ",
        date: Date(),
      },
      {
        grade: "Fail",
        summary: "20% ",
        date: Date(),
      },
    ],
  };
  return (
   <div><Chart data={apiData}/></div> 
  )
}

export default Dashboard