import Image from 'next/image'
import React from 'react'

const Review = ({name, coment, rating, date, avatar}) => {
  return (
    <div className="flex gap-x-2">
        <Image 
            src={`https://image.tmdb.org/t/p/original${avatar}`} 
            alt="author avatar" 
            className=''
            width={200}
            height={150}
        />
        <div className="flex flex-col gap-y-2 text-sm">
            <div className="flex gap-x-4 items-center">
                <p className="text-lg capitalize">{name}</p>
                <p className="">{date.substring(0, 10)}</p>
                <p className="">{rating}</p>
            </div>
            <p className="text-justify">{coment.substring(0, 350)}</p>
        </div>
        <div className="text-sm flex flex-col gap-y-2 min-w-max">
        </div>
    </div>
  )
}

export default Review