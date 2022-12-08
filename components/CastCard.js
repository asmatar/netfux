import React from 'react'
import Image from 'next/image'

const CastCard = ({picture, name}) => {
  return (
    <div className="flex flex-col gap-y-2 hover:scale-105 transition-all duration-200 ease" >
      <div className="flex-col flex relative h-[15vw] w-[10vw] overflow-hidden rounded">
          <Image
              alt="caracter picture"
              /*  width={200}
              height={200} */
              layout="fill"
              className=""
              src={`https://image.tmdb.org/t/p/original${picture}`}
          />
      </div>
      <p className="text-center text-sm">{name}</p>
  </div>
  )
}

export default CastCard