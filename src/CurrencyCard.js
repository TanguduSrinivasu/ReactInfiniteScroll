import React from 'react'

const CurrencyCard = ({image, name, price}) => {
  return (
    <div className='bg-white mx-20 ml-24 my-10 rounded-lg'>
      <img className='m-3 w-44 h-44 rounded-lg' src={image} alt='Coin'/>
      <div>
      <p className='ml-9 text-center text-2xl font-bold w-32 bg-red-300'>{name}</p>
      <p className='text-center text-xl font-bold pb-3'>${price}</p>
      </div>
    </div>
  )
}

export default CurrencyCard