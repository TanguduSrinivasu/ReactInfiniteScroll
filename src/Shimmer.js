import React from 'react'

export const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
        {Array(4)
        .fill()
        .map((e, index) => (
          <div  key={index} className='bg-white mx-20 ml-24 my-10 rounded-lg'>
          <div className='m-3 w-44 h-44 rounded-lg bg-gray-300'> </div>
          <div>
          <div className='ml-3 w-44 h-10 text-center text-2xl font-bold bg-gray-300 rounded-lg'></div>
          <div className='text-center h-5 ml-3 w-44 text-xl font-bold my-2 bg-gray-300 rounded-lg'></div>
          </div>
        </div>
        ))}
    </div>
  )
}
