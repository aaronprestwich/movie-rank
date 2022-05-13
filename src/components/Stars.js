// a one to five-star rating component that allows users to rate something 
//(movies in this case, but remember that components are reusable, so you could use it elsewhere!)

import React, {useState} from "react";
import {FaStar} from 'react-icons/fa';

const Stars = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    let rankStar = null;
    return( 
            <div>
            {[...Array(5)].map((star, i) =>{
                const ratingValue = i + 1;
                
                return(
                    <label>
                        <input type="radio" 
                        name= "rating" 
                        value={ratingValue} 
                        onClick={()=> setRating(ratingValue)}
                        />
                        <FaStar className="star"
                         color={ratingValue <= (hover || rating) ? "FFCD3C": "#7f7f7f"}
                         size={25}
                         onMouseEnter={()=> setHover(ratingValue)}
                         onMouseLeave={()=> setHover(null)}
                        />
                    </label>
                ); 
            })}
            
            <div rank={rating == null ? rankStar ='Not Reviewed' : rankStar = ({rating} +' of 5 Stars')}>{rankStar}</div>
           </div>
    );   
};

export default Stars;