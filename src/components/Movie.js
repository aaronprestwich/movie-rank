// a component that represents movie data (i.e. image, synopsis, rating, etc…)
import React from "react";

import Stars from "./Stars";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

export default class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies: props.movies,
            title: props.title,
            genre: props.genre
        };
    }
    render() {
        let movies;
        if(this.state.movies){
            movies = this.state.movies.map((movie, index) => <Movie key ={index} {...movie}/>);            
        }
        return(
            <div>
                <div className="card bg-dark text-light m-5 p-5">

                    <div className="card-body bg-light">
                        {movies}
                        {this.state.title}
                        {this.state.genre}                        
                    </div>
                    <ReviewForm/>
                </div>
                <ReviewList/>
            </div>
        );
        
    }
}