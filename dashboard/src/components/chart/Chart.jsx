import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ data, dataKey, title, grid}) {
   
  return (
    <div className="chart">
        <h3 className="chart-title">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#c4c4c4" />
                <Line type="monotone" dataKey={dataKey} stroke="red" />
                <Tooltip />
                {grid &&<CartesianGrid stroke="#c4c4c4 " strokeDasharray="5 5" />}
                
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}


