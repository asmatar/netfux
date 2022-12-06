import React from 'react'
import Review from './Review'

const Reviews = ({reviews}) => {
    console.log("review",reviews)
    const filterByAvatar = reviews.filter(review => !!review.author_details.avatar_path && !review.author_details.avatar_path.includes("https"))
      console.log("filter",filterByAvatar)

    const displayReview = filterByAvatar.slice(0,4).map(review => (
      <Review
      key={review.id}
      name={review.author_details.name || review.author_details.username}
      rating={review.author_details.rating}
      coment={review.content}
      date = {review.created_at}
      avatar = {review.author_details?.avatar_path}
      />
    ))

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.3149 2.94717L11.7236 5.67549L14.7356 6.11314L12.5252 8.10468L13.262 11.0518L10.3149 9.39405L7.36774 11.0518L8.10452 8.10468L5.89417 6.11314L8.98867 5.67549L10.3149 2.94717Z" fill="#B91C1C"/>
          <path d="M11.5941 19.1564L10.315 18.4196L13.2621 13.2621H17.6829C17.8765 13.2624 18.0682 13.2245 18.2471 13.1506C18.426 13.0766 18.5886 12.9681 18.7255 12.8312C18.8624 12.6943 18.9709 12.5317 19.0449 12.3528C19.1188 12.1739 19.1567 11.9822 19.1564 11.7886V2.94714C19.1567 2.75355 19.1188 2.5618 19.0449 2.38289C18.9709 2.20397 18.8624 2.04141 18.7255 1.90452C18.5886 1.76763 18.426 1.6591 18.2471 1.58515C18.0682 1.5112 17.8765 1.47328 17.6829 1.47357H2.94714C2.75355 1.47328 2.5618 1.5112 2.38289 1.58515C2.20397 1.6591 2.04141 1.76763 1.90452 1.90452C1.76763 2.04141 1.6591 2.20397 1.58515 2.38289C1.5112 2.5618 1.47328 2.75355 1.47357 2.94714V11.7886C1.47328 11.9822 1.5112 12.1739 1.58515 12.3528C1.6591 12.5317 1.76763 12.6943 1.90452 12.8312C2.04141 12.9681 2.20397 13.0766 2.38289 13.1506C2.5618 13.2245 2.75355 13.2624 2.94714 13.2621H9.57821V14.7357H2.94714C2.16551 14.7357 1.41589 14.4252 0.863198 13.8725C0.310502 13.3198 9.21528e-08 12.5702 9.21528e-08 11.7886V2.94714C-9.6707e-05 2.56009 0.0760673 2.17681 0.224141 1.81921C0.372214 1.4616 0.589296 1.13667 0.862982 0.862983C1.13667 0.589296 1.4616 0.372215 1.81921 0.224141C2.17681 0.0760675 2.56009 -9.6707e-05 2.94714 9.21526e-08H17.6829C18.0699 -9.6707e-05 18.4532 0.0760675 18.8108 0.224141C19.1684 0.372215 19.4933 0.589296 19.767 0.862983C20.0407 1.13667 20.2578 1.4616 20.4059 1.81921C20.5539 2.17681 20.6301 2.56009 20.63 2.94714V11.7886C20.63 12.5702 20.3195 13.3198 19.7668 13.8725C19.2141 14.4252 18.4645 14.7357 17.6829 14.7357H14.1205L11.5941 19.1564Z" fill="#B91C1C"/>
          </svg>
          <h2 className="font-NetflixBold">Reviews</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {displayReview}
        </div>
      </div>
    </>
    
  )
}

export default Reviews