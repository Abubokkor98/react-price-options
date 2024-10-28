import React from 'react'

export default function Link({route}) {
    const {name,path} = route;
  return (
    <li className='mr-10 px-6 hover:bg-yellow-500' ><a href={path}>{name}</a></li>
  )
}
