import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

export default function PriceFeature({feature}) {
  return (
    <div className=''>
        <p className='flex items-center'><FaCircleCheck className='mr-2'></FaCircleCheck> {feature}</p>

    </div>
  )
}
