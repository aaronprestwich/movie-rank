// a container for all the Movie components and their data.
import React from "react";

import ReviewList from './ReviewList.js'
import Movie from "./Movie.js";
import Stars from "./Stars.js";


export default class Container extends React.Component {
    

    // countClicks(name){
    //     this.setState(state => {
    //         state.counts[name]
    //         ? state.counts[name] += 1
    //         : state.counts[name] = 1;
    //         console.log(state);

    //     if(state.counts[name] > state.highestCount){
    //         state.highestCount = state.counts[name];
    //         state.highestCountName = name;
    //     }
    //         return state;
            
    //     })
    // }
    

    render(){
        let movies = [
            {
                title: "Dune",
                genre: "drama",
                url: "https://m.media-amazon.com/images/M/MV5BMzk2OTg4MTk1NF5BMl5BanBnXkFtZTcwNjExNTgzNA@@._V1_.jpg"
            },
            {
                title: "Dune",
                genre: "drama",
                url: "https://m.media-amazon.com/images/M/MV5BMzk2OTg4MTk1NF5BMl5BanBnXkFtZTcwNjExNTgzNA@@._V1_.jpg"
            },
            {
                title: "Dune",
                genre: "drama",
                url: "https://m.media-amazon.com/images/M/MV5BMzk2OTg4MTk1NF5BMl5BanBnXkFtZTcwNjExNTgzNA@@._V1_.jpg"
            }]
            return(
                <div>
                    <Movie {...{components: movies}}/>
                </div>
            );
    }
}