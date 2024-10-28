import React from 'react'
import PriceOption from '../../../PriceOptions/PriceOption'

export default function PriceOptions() {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 30,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 free fitness consultation"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "5 group classes per month",
            "2 free fitness consultations"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 75,
          "features": [
            "24/7 gym access",
            "Locker room with towel service",
            "Unlimited group classes",
            "5 free personal training sessions per month",
            "Free access to sauna and steam room"
          ]
        },
        {
          "id": 4,
          "name": "Student Membership",
          "price": 25,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "2 group classes per month",
            "Discount on personal training sessions"
          ]
        },
        {
          "id": 5,
          "name": "Couples Membership",
          "price": 90,
          "features": [
            "Access to gym equipment for two",
            "Locker room access with towel service",
            "Unlimited group classes for two",
            "3 free personal training sessions per month for two",
            "Free access to sauna and steam room"
          ]
        }
      ]
      
  return (
    <div className='text-center m-10'>
        <h1 className='text-4xl font-semibold'>Best price in the town</h1>
       <div className='grid md:grid-cols-3 gap-4 mt-5 '>
       {
            priceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
        }
       </div>
    </div>
  )
}
