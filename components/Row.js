import React from 'react';
import Filmcard from './Filmcard';
function Row({ filmsCategory, CategoryTitle}) {

  const displayFilmCategory = filmsCategory.map((film)=>(
    <Filmcard key={film.id} film={film}/>
  ))  

  return (
    <div className="space-y-0.5 md:space-y-1">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
       {CategoryTitle}
      </h2>
      <div className="group relative md:-ml-2">
        <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
          {displayFilmCategory}
        </div>
      </div>
    </div>
  );
}

export default Row;
