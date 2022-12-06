import React from 'react'

const Similar = ({similar}) => {
    console.log("similar", similar)
  return (
    <div className="w-48">
    <div className="flex items-center gap-x-4">
      <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.068 7.0595L7.12001 9.13701L5.0425 10.085L7.12001 11.033L8.068 13.1105L9.01599 11.033L11.0935 10.085L9.01599 9.13701M16.136 0L18.153 4.034H15.1275L13.1105 0H11.0935L13.1105 4.034H10.085L8.068 0H6.051L8.068 4.034H5.0425L3.0255 0H2.017C0.917735 0 0 0.90765 0 2.017V14.119C0 15.2284 0.917735 16.136 2.017 16.136H18.153C18.6879 16.136 19.201 15.9235 19.5792 15.5452C19.9575 15.167 20.17 14.6539 20.17 14.119V0H16.136ZM18.153 14.119H2.017V2.491L3.80204 6.051H14.119L13.4836 7.43265L12.102 8.068L13.4836 8.70336L14.119 10.085L14.7544 8.70336L16.136 8.068L14.7544 7.43265L14.119 6.051H18.153V14.119Z" fill="#B91C1C"/>
      </svg>
        <h2 className="">Similar Movie</h2>
    </div>
      <div className="">
        <img src="/test.png" alt="test" className='w-full h-[12vw]' />
        </div>
        <p className="text-center text-sm">Iron Man</p>
    </div>
  )
}

export default Similar