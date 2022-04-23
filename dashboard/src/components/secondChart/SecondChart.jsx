import React from 'react';
import './secondChart.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
  } from "recharts";


export default function SecondChart({title,data}) {
  return (
    <div className="secondChart">
        <h3 className="secondChart-title">{title}</h3>
        <div className="secondChart-Item">
        <BarChart
      width={2000}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChart>
    </div>
    </div>
  )
}
