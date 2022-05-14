// a container for all the Movie components and their data.
import React from "react";

import Movie from "./Movie.js";

export default class Container extends React.Component {
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