// A text review a user can leave on a movie.

import Stars from "./Stars";


const Review = ({review}) => {
    return (
        <div>
            <Stars  stars={review.stars} />
            <p className="review">{review.content}</p>
        </div>
    );
}

export default Review;
    