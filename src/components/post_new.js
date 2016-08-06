import React, {Component} from 'react';

class PostNew extends Component{
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    //call create post action
  }

  render(){
    return(
        <form onSubmit={this.onSubmit}>
          <input />
          <input />
          <button type="submit" value="Submit"/>
        </form>
    );
  }
}


export default PostNew;
