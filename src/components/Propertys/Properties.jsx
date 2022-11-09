import React from 'react'

export default function Properties({propertyname,address,cost,img}) {
  return (
    <>
        <div className='flex flex-col w-full justify-center px-12 sm:px-0'>
            <img src={img} alt="none" className='rounded-xl w-full' />
            <div className='flex flex-col overflow-hidden gap-3'>
                <div>
                    <h3 className='text-gray-900 font-semibold text-xl'>{propertyname}</h3>
                    <p className='text-sm font-medium'>{address}</p>
                </div>
                <p className='text-blue-500 font-semibold text-base w-fit'>Rp. {cost}</p>
            </div>
            
        </div>
    </>
  )
}