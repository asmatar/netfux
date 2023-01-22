import React from 'react'
import Image from 'next/image'

const CastCard = ({picture, name, handleOpenCardModal, id}) => {

  const existPicture = picture ? `https://image.tmdb.org/t/p/original${picture}` : "/anonyme.jpeg"

  return (
    <div className="flex flex-col gap-y-2 hover:scale-105 transition-all duration-200 ease cursor-pointer" onClick={()=> handleOpenCardModal(id)}>
      <div className="flex-col flex relative h-[320px] w-[213px] overflow-hidden rounded">
          <Image
              alt="caracter picture"
              fill
              className=""
              src={existPicture}
          />
      </div>
      <p className="text-center text-sm">{name}</p>
    </div>
  )
}

export default CastCard