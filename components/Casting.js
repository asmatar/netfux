import React, {useState} from 'react'
import dynamic from 'next/dynamic'
import CastCard from './CastCard'
const CastModal = dynamic(() => import('./CastModal'), {
    ssr: false,
})
const  Casting = ({cast}) => {
    const [openCardModal, setOpenCardModal] = useState(false)
    const [currentActorId, setCurrentActorId] = useState(null)
    const handleOpenCardModal = (id) => {
        console.log("in open cared modal id", id)
        setOpenCardModal(true)
        setCurrentActorId(id)
    }
    const handleCloseCardModal = () => {
        setOpenCardModal(false)
    }
    console.log(cast)
    const displayCard = cast.slice(0,5).map(actor=> (
            <CastCard
                handleOpenCardModal={handleOpenCardModal}
                key={actor.id}
                id={actor.id}
                name = {actor.name}
                picture = {actor?.profile_path}
            />
        )
    )

  return (
    <>
    <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-4 items-center">
            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6232 7.0595C14.9543 7.0595 15.2822 6.99428 15.5881 6.86758C15.894 6.74088 16.1719 6.55516 16.406 6.32104C16.6402 6.08692 16.8259 5.80898 16.9526 5.50309C17.0793 5.1972 17.1445 4.86934 17.1445 4.53825C17.1445 3.86957 16.8789 3.22828 16.406 2.75546C15.9332 2.28263 15.2919 2.017 14.6232 2.017C13.9546 2.017 13.3133 2.28263 12.8405 2.75546C12.3676 3.22828 12.102 3.86957 12.102 4.53825C12.102 4.86934 12.1672 5.1972 12.2939 5.50309C12.4206 5.80898 12.6063 6.08692 12.8405 6.32104C13.3133 6.79387 13.9546 7.0595 14.6232 7.0595M7.0595 6.051C7.86191 6.051 8.63146 5.73224 9.19885 5.16485C9.76624 4.59746 10.085 3.82791 10.085 3.0255C10.085 2.22309 9.76624 1.45354 9.19885 0.886148C8.63146 0.318757 7.86191 0 7.0595 0C6.25709 0 5.48754 0.318757 4.92015 0.886148C4.35276 1.45354 4.034 2.22309 4.034 3.0255C4.034 3.82791 4.35276 4.59746 4.92015 5.16485C5.48754 5.73224 6.25709 6.051 7.0595 6.051ZM14.6232 9.0765C12.7777 9.0765 9.0765 10.0043 9.0765 11.8499V14.119H20.17V11.8499C20.17 10.0043 16.4688 9.0765 14.6232 9.0765ZM7.0595 8.068C4.70969 8.068 0 9.24794 0 11.5977V14.119H7.0595V11.8499C7.0595 10.9926 7.3923 9.48998 9.44964 8.35038C8.57225 8.16885 7.72511 8.068 7.0595 8.068Z" fill="#B91C1C"/>
            </svg>
            <h2 className="font-NetflixBold">Cast</h2>
        </div>
        {/* card in a composant */}
        <div className="flex justify-center xl:justify-between flex-wrap gap-4">
        {displayCard}
        </div>
        {openCardModal && <CastModal id={currentActorId} handleCloseCardModal={handleCloseCardModal}/>}
    </div>
    </>
  )
}

export default Casting