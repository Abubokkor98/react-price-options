import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

export default function Phones() {
    const [phones, setPhones] = useState([]);

    useEffect(()=>{
        // fetch ('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=> res.json())
        // .then(data=> setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone=>{
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phoneWithFakeData);
            setPhones(phoneWithFakeData);
        })


    },[])

    
  return (
    <div>
        <h1 className='text-5xl'>Phones: {phones.length}</h1>
        <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={'name'}></XAxis>
          <YAxis dataKey={'price'}></YAxis>
          <Tooltip></Tooltip>
        </BarChart>

    </div>
  )
}
