import React from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts';

export default function Chart() {
    const studentScores = [
        { id: 1, name: "Abu", math: 85, chemistry: 78, physics: 92 },
        { id: 2, name: "Sakil", math: 74, chemistry: 88, physics: 81 },
        { id: 3, name: "Sakib", math: 90, chemistry: 85, physics: 87 },
        { id: 4, name: "Lion", math: 68, chemistry: 90, physics: 75 },
        { id: 5, name: "Ali", math: 80, chemistry: 82, physics: 88 },
        { id: 6, name: "Siraj", math: 92, chemistry: 91, physics: 95 },
        { id: 7, name: "Jhankar", math: 76, chemistry: 70, physics: 79 },
        { id: 8, name: "Priyo", math: 88, chemistry: 84, physics: 90 },
        { id: 9, name: "Alif", math: 82, chemistry: 79, physics: 86 },
        { id: 10, name: "Ria", math: 95, chemistry: 93, physics: 94 }
      ];
      
  return (
    <div className='flex items-center justify-center'>
        <LineChart width={800} height={400} data={studentScores}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Line dataKey={'math'} stroke='red'></Line>
            <Line dataKey={'chemistry'} stroke='green'></Line>
            <Line dataKey={'physics'} stroke='purple'></Line>
        </LineChart>

    </div>
  )
}
