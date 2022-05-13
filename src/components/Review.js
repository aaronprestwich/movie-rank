// A text review a user can leave on a movie.
import React from "react";

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
              Review
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
    
    
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(){
//         this.props.onClick(this.props.name);
//     }
//     render(){
//         return (
//             <form>   
//                 <div className="form-group">
//                     <label htmlFor="review">Review Movie</label>
//                     <textarea className="form-control" rows="3"></textarea>
//                 </div>  
//                 <div className="form-group">
//                     <button className="btn btn-primary" type="submit" 
//                     onClick={() => this.setState}>Submit Review</button> 
//                 </div>   
//             </form>
//         )
//     }
// }
