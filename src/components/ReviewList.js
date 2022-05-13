// a container inside of a Movie that houses Review components.

import React from "react";

import Review from './Review.js';
import ReviewForm from './ReviewForm.js';

export default class ReviewList extends React.Component {

    render(){
        return(
            <div>
                <div className='card bg-light'>
                <div className='card-header bg-dark text-white'>
                   <Review/>
                </div>
                
                <div className='card-footer bg-light'>                    
                    <ReviewForm/>                    
                </div>
                </div>                            
            </div>            
        );
    }
}
