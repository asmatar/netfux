/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import baseUrl from "../constant/movie"
const CastModal = ({handleCloseCardModal, id}) => {
    const [casting, setCasting] = useState(null)
    const existPicture = casting?.profile_path ? `https://image.tmdb.org/t/p/original${casting?.profile_path}` : "/anonyme.jpeg"

    useEffect(() => {
        const fetchDetailCasting = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`)
        const data = await response.json()
        setCasting(data)
      }
      fetchDetailCasting()
    }, [id])
    
  return ReactDOM.createPortal((
    <div class="fixed top-0 left-0 w-full h-full right-0 bottom-0 outline-none overflow-x-hidden overflow-y-auto bg-black/60 z-50 flex items-center justify-center animate-fade">
        <div class="bg-[#181818] relative">
            <div className="rounded-full bg-black p-2 w-min absolute top-3 right-3 cursor-pointer" onClick={handleCloseCardModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z" fill="currentColor"></path></svg>
            </div>
            <div class="flex h-full">
                <div class="h-full w-[375px]">
                    <img class="h-full w-full object-top object-cover" src={existPicture} alt="" />
                </div>
                <div className="w-[375px]">
                    <div class="p-4">
                        <span class="px-2 py-1 leading-none bg-orange-200 text-red-600 rounded-full font-semibold uppercase tracking-wide text-xs">{casting?.known_for_department}</span>
                        <h2 class="mt-2 mb-2 font-bold">
                            <span className="text-xs mr-2 font-bold">{casting?.gender === 2 ? "Mr" : "Mrs"}</span>{casting?.name}
                        </h2>
                        <p class="text-sm text-justify">{casting?.biography.substring(0, 600) + " ..."}</p>
                    </div>
                    <div class="p-4 border-t border-b border-red-600 text-xs text-gray-700">
                        <span class="flex items-center mb-1 text-white">
                            birth date:  {casting?.birthday}
                        </span>
                        <span class="flex items-center text-white">
                           place of birth : {casting?.place_of_birth}
                        </span>
                    </div>
                    <div class="p-4 flex items-center text-sm text-white">
                        <span class="ml-2 flex gap-x-2 items-center">popularity: {casting?.popularity}
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3149 2.94717L11.7236 5.67549L14.7356 6.11314L12.5252 8.10468L13.262 11.0518L10.3149 9.39405L7.36774 11.0518L8.10452 8.10468L5.89417 6.11314L8.98867 5.67549L10.3149 2.94717Z" fill="#B91C1C"/>
                            <path d="M11.5941 19.1564L10.315 18.4196L13.2621 13.2621H17.6829C17.8765 13.2624 18.0682 13.2245 18.2471 13.1506C18.426 13.0766 18.5886 12.9681 18.7255 12.8312C18.8624 12.6943 18.9709 12.5317 19.0449 12.3528C19.1188 12.1739 19.1567 11.9822 19.1564 11.7886V2.94714C19.1567 2.75355 19.1188 2.5618 19.0449 2.38289C18.9709 2.20397 18.8624 2.04141 18.7255 1.90452C18.5886 1.76763 18.426 1.6591 18.2471 1.58515C18.0682 1.5112 17.8765 1.47328 17.6829 1.47357H2.94714C2.75355 1.47328 2.5618 1.5112 2.38289 1.58515C2.20397 1.6591 2.04141 1.76763 1.90452 1.90452C1.76763 2.04141 1.6591 2.20397 1.58515 2.38289C1.5112 2.5618 1.47328 2.75355 1.47357 2.94714V11.7886C1.47328 11.9822 1.5112 12.1739 1.58515 12.3528C1.6591 12.5317 1.76763 12.6943 1.90452 12.8312C2.04141 12.9681 2.20397 13.0766 2.38289 13.1506C2.5618 13.2245 2.75355 13.2624 2.94714 13.2621H9.57821V14.7357H2.94714C2.16551 14.7357 1.41589 14.4252 0.863198 13.8725C0.310502 13.3198 9.21528e-08 12.5702 9.21528e-08 11.7886V2.94714C-9.6707e-05 2.56009 0.0760673 2.17681 0.224141 1.81921C0.372214 1.4616 0.589296 1.13667 0.862982 0.862983C1.13667 0.589296 1.4616 0.372215 1.81921 0.224141C2.17681 0.0760675 2.56009 -9.67071e-05 2.94714 9.21526e-08H17.6829C18.0699 -9.67071e-05 18.4532 0.0760675 18.8108 0.224141C19.1684 0.372215 19.4933 0.589296 19.767 0.862983C20.0407 1.13667 20.2578 1.4616 20.4059 1.81921C20.5539 2.17681 20.6301 2.56009 20.63 2.94714V11.7886C20.63 12.5702 20.3195 13.3198 19.7668 13.8725C19.2141 14.4252 18.4645 14.7357 17.6829 14.7357H14.1205L11.5941 19.1564Z" fill="#B91C1C"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  ), document.querySelector('#modalCast'))
}

export default CastModal