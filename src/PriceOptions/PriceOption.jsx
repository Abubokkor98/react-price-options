import React from 'react'
import PriceFeature from './PriceFeature/PriceFeature';

export default function PriceOption({option}) {
    const {name, price, features} = option;
  return (
    <div className='bg-blue-400 flex flex-col rounded-md p-4'>
        <h2>
            <span className='text-6xl font-extrabold'>{price}</span>
            <span className='text-2xl'>/month</span>
        </h2>
        <h4 className='text-3xl my-8'>{name}</h4>
      <div className='ml-5 flex-grow'>
      {
            features.map((feature, index)=> <PriceFeature key={index} feature={feature}></PriceFeature>)
        }
      </div>
        <button className='mt-12 bg-green-600 w-10/12 mx-auto py-2 rounded-md font-bold hover:bg-green-800'>Buy Now</button>
    </div>
  )
}
