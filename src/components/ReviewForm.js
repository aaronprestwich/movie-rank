// a form at the bottom of a Movie component that allows users to leave reviews. When submitted, 
//the review should be added to the movie. All this data can be stored in an array, no networking 
//or database needed for this assignment.
import React from "react";
import Review from "./Review";
export default class ReviewForm extends React.Component {
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
