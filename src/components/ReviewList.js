// a container inside of a Movie that houses Review components.

import React from "react";
import Review from "./Review";
export default class ReviewList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: props.reviews,
            content: props.content            
        };
    }
    render(){
        let reviews;
        if(this.state.reviews){
            reviews = this.state.reviews.map((review, index) => <Review key ={index} {...review}/>);            
        }
        return (
            <div className="m-3">
                {reviews}
            </div>
        )
    }
}