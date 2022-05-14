// a form at the bottom of a Movie component that allows users to leave reviews. When submitted, 
// the review should be added to the movie. All this data can be stored in an array, no networking 
// or database needed for this assignment.

import React from "react";
import Stars from "./Stars";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          review: 'Write a review here.',
          reviews: props.reviews
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({review: event.target.review});
      }
    
      handleSubmit(event) {
        alert('Your review was submitted: ' + this.state.review);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <h4>Review</h4>
              <Stars/>
            </label>
            <div className="form-group">
                <textarea className="form-control" rows="3" value={this.state.review} onChange={this.handleChange} />
            </div>
            <div className="form-group">
            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
      }
    }
    

